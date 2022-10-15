import {
  Box,
  Button,
  Flex,
  Text,
  Center,
  Spacer,
  Input,
  Image,
  HStack,
  SimpleGrid,
  VStack,
  Highlight
} from "@chakra-ui/react";
import { ethers, BigNumber } from "ethers";

const Item = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  return (
    <Center>
    <Box marginTop="200px">
      <HStack spacing="100px">
        <Box/>
        <VStack>
          <Image
            boxSize="400px"
            src="https://imageio.forbes.com/specials-images/imageserve/5f7de2ef3dc9728f43a2cce6/wine/960x0.jpg?format=jpg&width=960"
            alt="Wine"
          />
        </VStack>
        <VStack>
          <Text textColor="black">1992 Screaming Eagle Cabernet Sauvignon</Text>
          <Text textColor="black">Owner : DK</Text>
          <Image
            boxSize="400px"
            src="https://michaeltoth.me/images/20190417_ggplot_geom_line/NFLX.png"
            alt="Wine"
          />
          <HStack>
          <Text textColor="black">$24565</Text>
          <Button colorScheme="blue">Buy</Button>
          </HStack>
        </VStack>
      </HStack>
    </Box>
    </Center>
  );
};

export default Item;
