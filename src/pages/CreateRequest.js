import { Button, Text, Input, Stack, Textarea, Select, Flex, Spacer } from '@chakra-ui/react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { FirebaseConfig } from '../firebase_config';
import { useCollectionData } from 'react-firebase-hooks/firestore'

import './Profile.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


firebase.initializeApp(FirebaseConfig);

const firestore = firebase.firestore();

const CreateRequest = ({ accounts, setAccounts, member, signIn, profileImg, setImg, nickname }) => {

    const requestRef = firestore.collection('request');

    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [contents, setContents] = useState('');
    const [ETH, setETH] = useState('');

    let navigate = useNavigate();

    const SaveRequest = async (e) => {
        e.preventDefault();

        await requestRef.add({
            uid: accounts[0],
            author: nickname,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            title: title,
            type: type,
            eth: ETH,
            contents: contents
        })

        alert("successfully saved!")
        navigate("/pages/Request")

    };

    return (
        <Flex flexDirection="column" align="center" marginTop="160px" width="60%" height="60%"
            position="fixed" left="50%" transform="translate(-50%,0)" backgroundColor="#E1F6FF" borderRadius="40px" color="black">
            <Text color='tomato' fontSize="30px" marginTop="15px" marginBottom="15px">Make Request</Text>

            <Input variant='outline' placeholder="Title" width='70%' fontSize="20px" value={title} onChange={(e) => setTitle(e.target.value)} backgroundColor='white'/>
            
            <Flex marginTop="10px">
            <Select placeholder='Select Subject' onChange={(e) => setType(e.target.value)} value={type} height="30px" color="black" backgroundColor='white' marginRight="20px">
                <option value='College Counseling'>College Counseling</option>
                <option value='SAT Math'>SAT Math</option>
                <option value='SAT Math'>SAT Reading</option>
                <option value='Computer Science'>Computer Science</option>
                <option value='English'>English</option>
            </Select>
            <Input placeholder="USDC amount" width='150px' fontSize="12px" value={ETH} onChange={(e) => setETH(e.target.value)} backgroundColor='white'/>
            </Flex>
            <Spacer />

            <Textarea placeholder="Contents" height="30vh" width='70%' value={contents} onChange={(e) => setContents(e.target.value)} backgroundColor='white'/>
            <Spacer />
            <Button onClick={SaveRequest} disabled={!contents} backgroundColor="green" color="white">Save</Button>
            <Spacer />
        </Flex>
    );
};

export default CreateRequest;