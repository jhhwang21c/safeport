import React, { useRef, useState } from 'react';
import './Chat.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { FirebaseConfig } from '../firebase_config';
import { useCollectionData } from 'react-firebase-hooks/firestore'

import { Button, Flex } from '@chakra-ui/react';
import { ethers } from 'ethers';
import AcceptedNFT from '../AcceptedNFT.json';
import batman from '../assets/images/batman_avatar.png';
import { doc, getDoc } from 'firebase/firestore';

const acceptedNFTAddress = process.env.REACT_APP_CONTRACT;

firebase.initializeApp(FirebaseConfig);

const firestore = firebase.firestore();


const Chat = ({ accounts, setAccounts, member, signIn, profileImg, setImg, nickname }) => {

    async function loginNFT() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                acceptedNFTAddress,
                AcceptedNFT.abi,
                signer
            );

            const balance = await contract.balanceOf(accounts[0]);

            try {
                if (balance.toString() !== "0") {
                    signIn(true);

                    //NFT profile pic
                    const tokenId = await contract.tokenOfOwnerByIndex(accounts[0], 0);

                    let tokenMetadataURI = await contract.tokenURI(tokenId);

                    if (tokenMetadataURI.startsWith("ipfs://")) {
                        tokenMetadataURI = `https://ipfs.io/ipfs/${tokenMetadataURI.split("ipfs://")[1]}`
                    }

                    const tokenMetadata = await fetch(tokenMetadataURI).then((response) => response.json());

                    let tokenImgURI = `https://ipfs.io/ipfs/${tokenMetadata["image"].split("ipfs://")[1]}`;

                    setImg(tokenImgURI);
                    //NFT profile pic

                    alert("signed in with NFT");
                } else {
                    signIn(false);
                    alert("you are not a member yet!");
                }
            } catch (error) {
                console.log(error);
                return null;
            }
        }
    }


    return (
        <div className="chatPage">

            <section className="chatSection">
                {member ? <ChatRoom accounts={accounts} profileImg={profileImg} nickname={nickname} /> : (<button className="sign-in" onClick={loginNFT}>Sign in</button>)}
            </section>

        </div>
    );
}

function ChatRoom({ accounts, profileImg, nickname }) {

    const [room, setRoom] = useState("messages");
    const [showChat, setShowChat] = useState(false);

    const dummy = useRef();
    const messagesRef = firestore.collection(room);
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('');


    const joinRoom = async (school) => {
        if (room !== "") {
            setRoom(school);
            setShowChat(true);
        }
    }

    const sendMessage = async (e) => {
        e.preventDefault();

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid: accounts[0],
            author: nickname,
            photoURL: profileImg,
            time:
                new Date(Date.now()).getHours() +
                ":" +
                ('0' + new Date(Date.now()).getMinutes()).slice(-2)
        })

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            {!showChat ? (
                <Flex flexDirection="column">

                    <button className="General" onClick={() => joinRoom("General")}>General</button>
                    <button className="Harvard" onClick={() => joinRoom("Harvard")}>Harvard</button>
                    <button className="Yale" onClick={() => joinRoom("Yale")}>Yale</button>
                    <button className="Princeton" onClick={() => joinRoom("Princeton")}>Princeton</button>
                </Flex>
            ) : (
                <div>
                    <Button position="fixed" top="130px" left="200px" onClick={()=> setShowChat(false)} backgroundColor="grey">Back</Button>
                    <main className='chatMain'>
                        {messages && messages.map((msg, index) => <ChatMessage key={index} message={msg} accounts={accounts} profileImg={profileImg} />)}
                        <span ref={dummy}></span>
                    </main>
                    <form className="chatForm" onSubmit={sendMessage}>
                        <input className="chatInput" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="type your message..." />
                        <button type="submit" disabled={!formValue}>send</button>
                    </form>
                </div>)}
        </>
    )
}


function ChatMessage(props) {

    const { text, uid, author, photoURL, time } = props.message;
    const accounts = props.accounts;

    const messageClass = uid === accounts[0] ? 'sent' : 'received';

    return (
        <div className={`message ${messageClass}`}>
            <Flex className="chatflex1" justify="center" align="start" flexDirection="column">
                <div id='author'>{author}</div>
                <Flex className="chatflex2" justify="center" align="center" flexDirection="row">
                    <img className="chatImg" src={photoURL || batman} alt="avatar" />
                    <p className='chatP'>{text}</p>
                    <div id='timestamp'>{time}</div>
                </Flex>
            </Flex>
        </div>
    )
}


export default Chat;