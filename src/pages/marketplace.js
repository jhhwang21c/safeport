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
  VStack,
  IconButton,
  Link,
  HStack,
} from "@chakra-ui/react";
import { ethers, BigNumber } from "ethers";

const Marketplace = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  return (
    <Center>
      <VStack spacing="150px">
        <Box marginTop="200px">
          <Text textColor="black">Trending in Wine</Text>
          <Box marginTop="20px">
            <SimpleGrid columns={2} spacing={100}>
              <VStack>
                <Button colorScheme="blue">1. Chateau Margaux 1787</Button>
                <Button colorScheme="blue">4. Chateau Cheval Blanc 1947</Button>
              </VStack>
              <VStack>
                <Button colorScheme="blue">1. Chateau Margaux 1787</Button>
                <Button colorScheme="blue">4. Chateau Cheval Blanc 1947</Button>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
        <SimpleGrid columns={5} spacing={50}>
          <VStack spacing="100px">
            <Link href="./WineMarketplace" rel="noreferrer">
              <IconButton
                icon={
                  <Image
                    boxSize="200px"
                    src="https://imageio.forbes.com/specials-images/imageserve/5f7de2ef3dc9728f43a2cce6/wine/960x0.jpg?format=jpg&width=960"
                    alt="Wine"
                  />
                }
              />
            </Link>
            <Text textColor="black">Wines</Text>
          </VStack>

          <VStack spacing="100px">
            <IconButton
              icon={
                <Image
                  boxSize="200px"
                  src="https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/a27f8ee2-6e01-4c86-ba22-5173bd7b0b0d/nike-x-travis-scott-air-max-270-cactus-trails-release-date.jpg"
                  alt="Shoes"
                />
              }
            />
            <Text textColor="black">Shoes</Text>
          </VStack>

          <VStack spacing="100px">
            <IconButton
              icon={
                <Image
                  boxSize="200px"
                  src="https://m.media-amazon.com/images/S/aplus-media/sc/05ffdb0d-e287-4910-b55f-96ad05d3818b.__CR0,0,300,300_PT0_SX300_V1___.jpg"
                  alt="Watches"
                />
              }
            />
            <Text textColor="black">Watches</Text>
          </VStack>
          <VStack spacing="100px">
            <IconButton
              icon={
                <Image
                  boxSize="200px"
                  src="https://cdn.shopify.com/s/files/1/0297/3705/8388/files/500x500_Rings_cdc0d3f7-1a69-4049-a349-c0537661801c.jpg?v=1645030533"
                  alt="Jewelry"
                />
              }
            />
            <Text textColor="black">Jewelry</Text>
          </VStack>
          <VStack spacing="100px">
            <IconButton
              icon={
                <Image
                  boxSize="200px"
                  src="https://www.smartchamp.com/tc/60%20Iconic%20and%20Classic%20Cars_files/1957-corvette-hugo90778-l.jpg"
                  alt="Classic Car"
                />
              }
            />
            <Text textColor="black">Classic Cars</Text>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Center>
  );
};

export default Marketplace;
