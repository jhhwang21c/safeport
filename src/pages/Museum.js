import {
  Box,
  Button,
  Text,
  VStack,
  HStack,
  Badge,
  Divider,
  Link
} from "@chakra-ui/react";

const Museum = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  return (
    <VStack spacing="30px">
      <Box marginTop="120px"></Box>
      <Text textColor="black">Active Museums</Text>
      <HStack>
        <Box w="95%" p={4} color="white">
          <Text textColor="black" fontSize="xl">
            Name: Boston Wine Collection / Location : 25 Harbor Shore Drive Boston MA
            02210
            <Badge ml="1" colorScheme="green">
              New
            </Badge>
            <Badge ml="1" colorScheme="red">
              Hot
            </Badge>
          </Text>
        </Box>
        <Link href="./ParisMuseum" rel="noreferrer">
        <Box w="10%" p={4} color="white">
          <Button colorScheme="blue">View</Button>
        </Box>
        </Link>
      </HStack>
      <Divider/>
      <HStack>
        <Box w="95%" p={4} color="white">
          <Text textColor="black" fontSize="xl">
            Name: Seoul Shoes Collection / Location : 12 Insadong-gil, Jongno-gu, Seoul, South Korea
            <Badge ml="1" colorScheme="green">
              New
            </Badge>
            <Badge ml="1" colorScheme="red">
              Hot
            </Badge>
          </Text>
        </Box>
        <Box w="10%" p={4} color="white">
          <Button colorScheme="blue">View</Button>
        </Box>
      </HStack>
      <Divider/>
      <HStack>
        <Box w="95%" p={4} color="white">
          <Text textColor="black" fontSize="xl">
            Name: Pittsburgh Watch Collection / Location : 6213 Spirit Street, Pittsburgh, PA 15206
            <Badge ml="1" colorScheme="green">
              New
            </Badge>
            <Badge ml="1" colorScheme="red">
              Hot
            </Badge>
          </Text>
        </Box>
        <Box w="10%" p={4} color="white">
          <Button colorScheme="blue">View</Button>
        </Box>
      </HStack>
      <Divider/>
      <HStack>
        <Box w="95%" p={4} color="white">
          <Text textColor="black" fontSize="xl">
            Name: Paris Jewelry Collection / Location : Champ de Mars, 5 Av. Anatole, 75007 Paris, France
            <Badge ml="1" colorScheme="green">
              New
            </Badge>
            <Badge ml="1" colorScheme="red">
              Hot
            </Badge>
          </Text>
        </Box>
        <Box w="10%" p={4} color="white">
          <Button colorScheme="blue">View</Button>
        </Box>
      </HStack>
      <Divider/>

    </VStack>
  );
};

export default Museum;
