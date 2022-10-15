import React from "react";
import { Box, Button, Flex, Image, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import './Nav.css'
import Discord from "./assets/social-media-icons/discord.png";
import Email from "./assets/social-media-icons/email_32x32.png";
import Twitter from "./assets/social-media-icons/twitter_32x32.png";

import { ethers } from 'ethers';
import AcceptedNFT from './AcceptedNFT.json';
import { FirebaseConfig } from "./firebase_config";
import { doc, getDoc } from "firebase/firestore";

const acceptedNFTAddress = process.env.REACT_APP_CONTRACT;

firebase.initializeApp(FirebaseConfig);

const firestore = firebase.firestore();

const Nav = ({ accounts, setAccounts, member, signIn, profileImg, setImg, nickname, setNickname }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);


            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                acceptedNFTAddress,
                AcceptedNFT.abi,
                signer
            );

            const balance = await contract.balanceOf(accounts[0]);
            const docRef = doc(firestore, "user", accounts[0]);

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
                    
                    const docSnap = await getDoc(docRef);
                    setNickname(docSnap.exists() ? docSnap.get("nickname") : accounts[0]);
                } else {
                    signIn(false);
                    alert("you are not a member yet!");
                    setNickname(accounts[0]);
                }
            } catch (error) {
                console.log(error);
                return null;
            }



        }
    }

    return (
        <div className="Nav">
            <Flex justify="space-between" align="center" backgroundColor="rgba(0,0,0,0.9)" height="90px">
                {/* left side - social media icons */}
                <Flex justify="space-around" width="30%" padding="0 75px">
                    <a href="https://www.discord.com" target="_blank" rel="noreferrer">
                        <Image src={Discord} boxSize="42px" margin="0 15px" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                        <Image src={Twitter} boxSize="42px" margin="0 15px" />
                    </a>
                    <a href="https://www.gmail.com" target="_blank" rel="noreferrer">
                        <Image src={Email} boxSize="42px" margin="0 15px" />
                    </a>
                </Flex>

                {/* right side - website menu */}
                <Flex justify="space-around" align="center" width="55%" padding="30px">
                    <Box margin="0 15px">
                        <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '25px' }} >Home</Link>
                    </Box>
                    <Spacer />
                    <Box margin="0 15px">
                        <a href="https://rinkebyfaucet.com/" target="_blank" style={{ textDecoration: 'none', color: 'white', fontSize: '25px' }} rel="noreferrer">Faucet</a>
                    </Box>
                    <Spacer />
                    <Box margin="0 15px">
                        <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '25px' }} >About</Link>
                    </Box>
                    <Spacer />
                    {/* member only feature */}
                    {member ? (
                    <>
                    <Box margin="0 15px">
                        <Link to="./pages/Chat" style={{ textDecoration: 'none', color: 'white', fontSize: '25px' }}>Chat</Link>
                    </Box>
                    <Spacer />
                    <Box margin="0 15px">
                        <Link to="./pages/Request" style={{ textDecoration: 'none', color: 'white', fontSize: '25px' }}>Request</Link>
                    </Box>
                    <Spacer />
                    </>
                    ) : <></>}

                    {/* connect */}
                    {isConnected ? (<>
                        <Box backgroundColor="green"
                            fontFamily="inherit" borderRadius="5px"
                            width="150px" fontSize="20px" color="white"
                            padding="12px" margin="0 15px"
                            boxShadow="0px 2px 2px 1px #0F0F0F" textAlign="center">
                            Connected
                        </Box> {member ? (<Link to="./pages/Profile"><img className="chatImg" src={profileImg} alt="nft" /></Link>) : <></>}</>
                    ) : (
                        <Button
                            backgroundColor="#D6517D" borderRadius="5px"
                            boxShadow="0px 2px 2px 1px #0F0F0F"
                            color="white" cursor="pointer"
                            fontFamily="inherit" fontSize="20px"
                            width="150px" padding="12px" height="50px"
                            margin="0 15px"
                            onClick={() => { connectAccount(); }}>
                            Connect
                        </Button>
                    )}

                </Flex>

            </Flex>
        </div>
    );
};

export default Nav;