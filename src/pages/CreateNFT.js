import { useState } from "react";
import { uploadFileToIPFS, uploadJSONToIPFS } from "../pinata";

import { Box, Button, Flex, Text, Center, Spacer, Input, Image } from "@chakra-ui/react";
import SafePortNFT from '../SafePortNFT.json';


export default function SellNFT () {
    const [formParams, updateFormParams] = useState({ name: '', description: ''});
    const [fileURL, setFileURL] = useState(null);
    const ethers = require("ethers");
    const [message, updateMessage] = useState('');
    const [ownerAddress, setOwnerAddress] = useState('');

    //This function uploads the NFT image to IPFS
    async function OnChangeFile(e) {
        var file = e.target.files[0];
        //check for file extension
        try {
            //upload the file to IPFS
            const response = await uploadFileToIPFS(file);
            if(response.success === true) {
                console.log("Uploaded image to Pinata: ", response.pinataURL)
                setFileURL(response.pinataURL);
            }
        }
        catch(e) {
            console.log("Error during file upload", e);
        }
    }

    //This function uploads the metadata to IPFS
    async function uploadMetadataToIPFS() {
        const {name, description} = formParams;
        //Make sure that none of the fields are empty
        if( !name || !description || !fileURL)
            return;

        const nftJSON = {
            name, description, image: fileURL
        }

        try {
            //upload the metadata JSON to IPFS
            const response = await uploadJSONToIPFS(nftJSON);
            if(response.success === true){
                console.log("Uploaded JSON to Pinata: ", response)
                return response.pinataURL;
            }
        }
        catch(e) {
            console.log("error uploading JSON metadata:", e)
        }
    }

    async function listNFT(e) {
        e.preventDefault();

        //Upload data to IPFS
        try {
            const metadataURL = await uploadMetadataToIPFS();
            //After adding your Hardhat network to your metamask, this code will get providers and signers
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            updateMessage("Please wait.. uploading (upto 5 mins)")

            //Pull the deployed contract instance
            let contract = new ethers.Contract("0x51741b8c5128D3eC25a4F2b014858E5e6E2e8279", SafePortNFT.abi, signer)


            //actually create the NFT
            let transaction = await contract.createToken(metadataURL, ownerAddress)
            await transaction.wait()

            alert("Successfully created NFT!");
            updateMessage("");
            updateFormParams({ name: '', description: ''});
            window.location.replace("/")
        }
        catch(e) {
            alert( "Upload error"+e )
        }
    }

    console.log("Working", process.env);

    return (
        <Center>
        <Flex 
        borderRadius="30px"
        w="70%"
        marginTop="140px"
        marginBottom="70px"
        paddingBottom="30px"
        height="500px"
        flexDirection="column"
        justify="center"
        align="center">
            <Text fontSize="30px" color="black">This page is for staff members</Text>
            <Input
                value={ownerAddress} onChange={(e) => setOwnerAddress(e.target.value)}
                placeholder='Owner Wallet Address'
                size='md' width="60%" marginTop="20px"
            />
            <Input
                onChange={e => updateFormParams({...formParams, name: e.target.value})} value={formParams.name}
                placeholder='Name'
                size='md' width="60%" marginTop="20px"
            />
            <Input
                onChange={e => updateFormParams({...formParams, description: e.target.value})} value={formParams.description}
                placeholder='Description'
                size='md' width="60%" marginTop="20px"
            />
            
                <Box fontSize="15px" marginTop="20px" color="black">
                    <input type={"file"} onChange={OnChangeFile}></input>
                </Box>
                
                <Button onClick={listNFT} marginTop="20px" color="green">
                    Mint
                </Button>
        </Flex>
        </Center>
    );
};