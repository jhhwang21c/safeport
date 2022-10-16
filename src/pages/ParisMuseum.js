import {
  Flex,
  Box,
  Text,
  Center,
  Image,
  VStack,
  Select,
  HStack,
  Button,
  useToast,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import NFTChoose from "../NFTChoose";
import { Alchemy, Network } from "alchemy-sdk";
import { useState } from "react";

const ParisMuseum = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);
  const toast = useToast();

  const [data, updateData] = useState([]);
  const [dataFetched, updateFetched] = useState(false);
  const [address, updateAddress] = useState("0x");

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
      };
      return item;
    });

    updateData(items);
    updateFetched(true);
    updateAddress(accounts[0]);
  }

  if (!dataFetched) getNFTData();

  return (
    <Center>
      <VStack spacing="30px">
        <Box marginTop="80px" />
        <Text textColor="black">
          <b>Boston Wine Collection</b>
        </Text>
        <HStack spacing="30px">
          <Image
            src="https://news.artnet.com/app/news-upload/2019/11/steam_scr05_nightGift_02-1024x576.png"
            alt="Museum"
          />
          <Popover>
            <PopoverTrigger>
              <Button colorScheme="green">My Items</Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Your Items</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <Flex align="center">
                    {data.map((value, index) => {
                      return <NFTChoose data={value} key={index}></NFTChoose>;
                    })}
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>

          <Button
            colorScheme="blue"
            onClick={() =>
              toast({
                title: "Your collection has been requested for addition.",
                description: "We will review the request and get back to you.",
                status: "success",
                duration: 9000,
                isClosable: true,
              })
            }
          >
            Add to Museum
          </Button>
        </HStack>
      </VStack>
    </Center>
  );
};

export default ParisMuseum;
