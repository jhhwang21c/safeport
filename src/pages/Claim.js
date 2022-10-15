import {
  Box,
  Button,
  Flex,
  Text,
  Center,
  Spacer,
  Input,
  Image,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import { ethers, BigNumber } from "ethers";

const Claim = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  return (
    <Center>
      <Box marginTop="500px">
        <SimpleGrid columns={2} spacing={500}>
          <Button colorScheme="blue">Retrieve Now</Button>
          <Button colorScheme="blue">Pay Now</Button>
        </SimpleGrid>
      </Box>
    </Center>
  );
};

export default Claim;
