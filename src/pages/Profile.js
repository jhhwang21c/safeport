import { Button, Text, Input, Stack, Image, Flex, Center } from '@chakra-ui/react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { FirebaseConfig } from '../firebase_config';
import { useCollectionData } from 'react-firebase-hooks/firestore'

import './Profile.css'
import { useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';


firebase.initializeApp(FirebaseConfig);

const firestore = firebase.firestore();

const Profile = ({ accounts, setAccounts, member, signIn, profileImg, setImg }) => {

    const profileRef = firestore.collection('user');
    const query = profileRef.orderBy('createdAt').limit(25);
    const [profiles] = useCollectionData(query, { idField: 'id' });

    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [speciality, setSpeciality] = useState('');

    const SaveProfile = async (e) => {
        e.preventDefault();
        await setDoc(doc(firestore, "user", accounts[0]), {
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            nickname: name,
            bio: bio,
            speciality: speciality
        })

        alert("successfully saved!")

    };

    return (
        <Center>
        <Flex justify='center' align='center' className='Profile' flexDirection='column'>
            <Text color='tomato' marginTop='20px' fontSize="35px">Profile page</Text>
            <Image boxSize='200px' marginTop='20px' borderRadius="100px" src={profileImg} alt="nft" />

            <Stack spacing={10} marginTop='30px' marginBottom='20px'>
                <Input variant='outline' placeholder="Nickname" color='black' size='md' value={name} onChange={(e) => setName(e.target.value)} />
                <Input variant='outline' placeholder="Bio" color='black' size='md' value={bio} onChange={(e) => setBio(e.target.value)} />
                <Input variant='outline' placeholder="Speciality" color='black' size='md' value={speciality} onChange={(e) => setSpeciality(e.target.value)} />
            </Stack>

            <Button onClick={SaveProfile} disabled={!name} backgroundColor="green">Save</Button>
        </Flex>
        </Center>
    );
};


export default Profile;