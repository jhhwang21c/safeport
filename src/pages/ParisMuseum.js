import {
  Box,
  Text,
  Center,
  Image,
  VStack,
  Select,
  HStack,
  Button,
  useToast,
} from "@chakra-ui/react";
import { ethers, BigNumber } from "ethers";

const ParisMuseum = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);
  const toast = useToast();
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
            alt="Wine"
          />
          <VStack spacing="30px">
            <Select placeholder="Request addition of your collection" textColor="black">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
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
          </VStack>
        </HStack>
      </VStack>
    </Center>
  );
};

export default ParisMuseum;
