import {
  Box,
  Text,
  Center,
  Image,
  VStack,
  Select,
  HStack,
  Button,
} from "@chakra-ui/react";
import { ethers, BigNumber } from "ethers";

const ParisMuseum = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  return (
    <Center>
      <VStack spacing="30px">
        <Box marginTop="80px" />
        <Text textColor="black">
          <b>Paris Museum</b>
        </Text>
        <HStack spacing="30px">
          <Image
            src="https://news.artnet.com/app/news-upload/2019/11/steam_scr05_nightGift_02-1024x576.png"
            alt="Wine"
          />
          <VStack spacing="30px">
            <Select placeholder="Add your collection" textColor="black">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Button colorScheme="blue">Add to Museum</Button>
          </VStack>
        </HStack>
      </VStack>
    </Center>
  );
};

export default ParisMuseum;
