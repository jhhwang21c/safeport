import {
  Box,
  Text,
  Image,
  VStack,
  IconButton,
  Link,
  HStack,
  SimpleGrid,
  Select
} from "@chakra-ui/react";
import { ethers, BigNumber } from "ethers";

const WineMarketplace = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  return (
    <Box marginTop="200px">
      <HStack spacing="100px">
        <Box />
        <VStack>
          <Text textColor="black">Wine Marketplace</Text>
          <Select placeholder="Filter option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </VStack>
        <SimpleGrid id="result" columns={4} spacing={50}>
          <VStack spacing="200px">
            <Link href="./Item" rel="noreferrer">
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
            <Link href="./Item" rel="noreferrer">
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
            <Link href="./Item" rel="noreferrer">
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
          </VStack>
          <VStack spacing="200px">
            <Link href="./Item" rel="noreferrer">
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
            <Link href="./Item" rel="noreferrer">
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
            <Link href="./Item" rel="noreferrer">
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
          </VStack>
          <VStack spacing="200px">
            <Link href="./Item" rel="noreferrer">
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
            <Link href="./Item" rel="noreferrer">
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
            <Link href="./Item" rel="noreferrer">
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
          </VStack>
          <VStack spacing="200px">
            <Link href="./Item" rel="noreferrer">
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
            <Link href="./Item" rel="noreferrer">
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
            <Link href="./Item" rel="noreferrer">
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
          </VStack>
        </SimpleGrid>
      </HStack>
    </Box>
  );
};

export default WineMarketplace;
