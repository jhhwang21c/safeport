import SafePortNFT from '../SafePortNFT.json';
import axios from "axios";
import { useState } from "react";
import { useParams } from 'react-router-dom';

import { Box, Button, Flex, Text, Center, Spacer, Input, Image } from "@chakra-ui/react";
import NFTTile from "../NFTTile";

import { Alchemy, Network } from "alchemy-sdk";

export default function MyPage ({ accounts, setAccounts }) {
    const [data, updateData] = useState([]);
    const [dataFetched, updateFetched] = useState(false);
    const [address, updateAddress] = useState("0x");
    const [totalPrice, updateTotalPrice] = useState("0");

    async function getNFTData(tokenId) {
        //create an NFT Token
        
        const config = {
            apiKey: "TYLyZbwB20XtlVCG9cmQLN9Zbl8BWJfX",
            network: Network.ETH_GOERLI,
          };
        const alchemy = new Alchemy(config);
          
        const nfts = await alchemy.nft.getNftsForOwner(accounts[0]);
            // Print NFTs
        console.log(nfts);


        /*
        * Below function takes the metadata from tokenURI and the data returned by getMyNFTs() contract function
        * and creates an object of information that is to be displayed
        */
        
        const numNfts = nfts["totalCount"];
        const nftList = nfts["ownedNfts"];

        console.log(`Total NFTs owned by ${accounts[0]}: ${numNfts} \n`);

        const items = nftList.map((i) => {

            let item = {
                tokenId: i.tokenId,
                image: i.media[0].raw,
                title: i.title,
                description: i.description,
            }
            return item;
        }
        )

        updateData(items);
        updateFetched(true);
        updateAddress(accounts[0]);
    }

    if(!dataFetched)
        getNFTData();

    return (

        <Center>
        <Flex bg="rgba(0,0,0,0.2)"
        borderRadius="30px"
        w="70%"
        marginTop="140px"
        marginBottom="70px"
        paddingBottom="30px"
        height="500px"
        flexDirection="column"
        justify="center"
        align="center">
            <Flex>
                    {address}
                </Flex>
                    <Flex>
                        <h2 >No. of NFTs: &nbsp;</h2>
                        {data.length}
                    </Flex>
                <h2 >Your NFTs</h2>
                <Flex align="center">
                    {data.map((value, index) => {
                    return <NFTTile data={value} key={index}></NFTTile>;
                    })}
                </Flex>
                <div>
                    {data.length == 0 ? "Oops, No NFT data to display (Are you logged in?)":""}
                </div>
        </Flex>
        </Center>

    )
};