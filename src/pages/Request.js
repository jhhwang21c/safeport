import {
    Box, Button, Flex, Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody, useDisclosure,
} from "@chakra-ui/react";
import './Request.css'

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { FirebaseConfig } from '../firebase_config';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

firebase.initializeApp(FirebaseConfig);

const firestore = firebase.firestore();

const Request = ({ accounts, setAccounts, member, signIn, profileImg, setImg, nickname }) => {

    let navigate = useNavigate();

    const requestsRef = firestore.collection('request');
    const query = requestsRef.orderBy('createdAt', 'desc').limit(20);
    const [requests] = useCollectionData(query, { idField: 'id' });


    return (
        <Flex className="request" flexDirection="column" align="center">
            <Text marginTop="120px">Request List</Text>
            <Button onClick={() => navigate("/pages/CreateRequest")} width="120px" position="absolute" right="20%" top="120px">make request</Button>
            <Box fontSize="20px" fontFamily="sans-serif" marginTop="30px" backgroundColor="#E1F6FF" borderRadius="10px" width="65%" height="65%">
                <Flex borderBottom="1px" marginTop="15px" marginBottom="15px" justify="center">
                    <Text width="600px" fontWeight="bold">Title</Text>
                    <Text width="200px" fontWeight="bold">Subject</Text>
                    <Text width="100px" fontWeight="bold">USDC</Text>
                    <Text width="150px" fontWeight="bold">Requestor</Text>
                </Flex>

                {requests && requests.map((cont, index) => <RequestList key={index} content={cont} accounts={accounts} profileImg={profileImg} />)}

            </Box>
        </Flex>
    );

};

function RequestList(props) {

    const { title, type, author, contents, eth, uid } = props.content;
    const accounts = props.accounts;
    const { isOpen, onOpen, onClose } = useDisclosure();

    const AcceptRequest = async (e) => {
        const requestRef = firestore.collection('accepted requests');
        e.preventDefault();

        await requestRef.add({
            mentor: accounts[0],
            mentee: uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            type: type,
            eth: eth,
        })

        alert("successfully accepted!")

    };

    return (
        <>

            <Flex justify="center">
                <Text width="600px" onClick={onOpen}>{title}</Text>
                <Text width="200px">{type}</Text>
                <Text width="100px">{eth}</Text>
                <Text width="150px">{author}</Text>
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
                <ModalContent width="400px" height="400px" backgroundColor="white" borderRadius="20px" top="20%">
                    <Flex flexDirection="column" align="center">
                        <ModalHeader marginTop="40px">Request Details</ModalHeader>
                        <ModalBody marginTop="40px">
                                <Text>Title: {title}</Text>
                                <Text>USDC: {eth}</Text>
                                <Text>Requestor: {author}</Text>
                                <Box width="350px">{contents}</Box>
                        </ModalBody>

                        <ModalFooter marginTop="40px">
                            <Button  mr={10} onClick={onClose}>
                                Close
                            </Button>
                            <Button colorScheme='green' onClick={AcceptRequest}>Accept</Button>
                        </ModalFooter>
                    </Flex>
                </ModalContent>
            </Modal>
        </>


    )
}

export default Request;