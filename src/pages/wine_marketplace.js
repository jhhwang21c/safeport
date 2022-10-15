import {
  Box,
  Text,
  Image,
  VStack,
  IconButton,
  Link,
  HStack,
  SimpleGrid,
  Select,
  Badge,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Heading,
} from "@chakra-ui/react";
import { ethers, BigNumber } from "ethers";

const WineMarketplace = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  return (
    <Box marginTop="200px">
      <HStack spacing="100px">
        <Box />
        <VStack spacing="100px">
          <Text textColor="black">Filter</Text>
          <Text textColor="black">Status</Text>
          <Select placeholder="Sort option" textColor="black">
            <option value="option1">Sort by Price</option>
            <option value="option2">Sort by Popularity</option>
            <option value="option3">Sort by Release Date</option>
          </Select>
          <VStack>
            <Text textColor="black">Price Range</Text>
            <RangeSlider
              aria-label={["$0", "$500", "+$1000"]}
              defaultValue={[10, 30]}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
          </VStack>
        </VStack>
        <SimpleGrid id="result" columns={4} spacing={50}>
          <VStack spacing="80px">
            <VStack spacing="65px">
              <Link href="./Item" rel="noreferrer">
                <IconButton
                  icon={
                    <Image
                      boxSize="160px"
                      src="https://imageio.forbes.com/specials-images/imageserve/5f7de2ef3dc9728f43a2cce6/wine/960x0.jpg?format=jpg&width=960"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                1992 Screaming Eagle Cabernet Sauvignon
                <Badge ml="1" colorScheme="green">
                  New
                </Badge>
                <Badge ml="1" colorScheme="blue">
                  Validated
                </Badge>
              </Text>
            </VStack>
            <VStack spacing="65px">
              <Link href="./Item" rel="noreferrer">
                <IconButton
                  icon={
                    <Image
                      boxSize="160px"
                      src="https://imageio.forbes.com/specials-images/imageserve/5f7de2ef3dc9728f43a2cce6/wine/960x0.jpg?format=jpg&width=960"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                1992 Screaming Eagle Cabernet Sauvignon
                <Badge ml="1" colorScheme="green">
                  New
                </Badge>
              </Text>
            </VStack>
            <VStack spacing="65px">
              <Link href="./Item" rel="noreferrer">
                <IconButton
                  icon={
                    <Image
                      boxSize="160px"
                      src="https://imageio.forbes.com/specials-images/imageserve/5f7de2ef3dc9728f43a2cce6/wine/960x0.jpg?format=jpg&width=960"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                1992 Screaming Eagle Cabernet Sauvignon
                <Badge ml="1" colorScheme="green">
                  New
                </Badge>
              </Text>
            </VStack>
          </VStack>

          <VStack spacing="80px">
            <VStack spacing="65px">
              <Link href="./Item" rel="noreferrer">
                <IconButton
                  icon={
                    <Image
                      boxSize="160px"
                      src="https://imageio.forbes.com/specials-images/imageserve/5f7de2ef3dc9728f43a2cce6/wine/960x0.jpg?format=jpg&width=960"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                1992 Screaming Eagle Cabernet Sauvignon
                <Badge ml="1" colorScheme="green">
                  New
                </Badge>
              </Text>
            </VStack>
            <VStack spacing="65px">
              <Link href="./Item" rel="noreferrer">
                <IconButton
                  icon={
                    <Image
                      boxSize="160px"
                      src="https://imageio.forbes.com/specials-images/imageserve/5f7de2ef3dc9728f43a2cce6/wine/960x0.jpg?format=jpg&width=960"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                1992 Screaming Eagle Cabernet Sauvignon
                <Badge ml="1" colorScheme="green">
                  New
                </Badge>
              </Text>
            </VStack>
            <VStack spacing="65px">
              <Link href="./Item" rel="noreferrer">
                <IconButton
                  icon={
                    <Image
                      boxSize="160px"
                      src="https://imageio.forbes.com/specials-images/imageserve/5f7de2ef3dc9728f43a2cce6/wine/960x0.jpg?format=jpg&width=960"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                1992 Screaming Eagle Cabernet Sauvignon
                <Badge ml="1" colorScheme="green">
                  New
                </Badge>
              </Text>
            </VStack>
          </VStack>
          <VStack spacing="80px">
            <VStack spacing="65px">
              <Link href="./Item" rel="noreferrer">
                <IconButton
                  icon={
                    <Image
                      boxSize="160px"
                      src="https://imageio.forbes.com/specials-images/imageserve/5f7de2ef3dc9728f43a2cce6/wine/960x0.jpg?format=jpg&width=960"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                1992 Screaming Eagle Cabernet Sauvignon
                <Badge ml="1" colorScheme="green">
                  New
                </Badge>
              </Text>
            </VStack>
            <VStack spacing="65px">
              <Link href="./Item" rel="noreferrer">
                <IconButton
                  icon={
                    <Image
                      boxSize="160px"
                      src="https://imageio.forbes.com/specials-images/imageserve/5f7de2ef3dc9728f43a2cce6/wine/960x0.jpg?format=jpg&width=960"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                1992 Screaming Eagle Cabernet Sauvignon
                <Badge ml="1" colorScheme="green">
                  New
                </Badge>
              </Text>
            </VStack>
            <VStack spacing="65px">
              <Link href="./Item" rel="noreferrer">
                <IconButton
                  icon={
                    <Image
                      boxSize="160px"
                      src="https://imageio.forbes.com/specials-images/imageserve/5f7de2ef3dc9728f43a2cce6/wine/960x0.jpg?format=jpg&width=960"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                1992 Screaming Eagle Cabernet Sauvignon
                <Badge ml="1" colorScheme="green">
                  New
                </Badge>
              </Text>
            </VStack>
          </VStack>
          <VStack spacing="80px">
            <VStack spacing="65px">
              <Link href="./Item" rel="noreferrer">
                <IconButton
                  icon={
                    <Image
                      boxSize="160px"
                      src="https://imageio.forbes.com/specials-images/imageserve/5f7de2ef3dc9728f43a2cce6/wine/960x0.jpg?format=jpg&width=960"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                1992 Screaming Eagle Cabernet Sauvignon
                <Badge ml="1" colorScheme="green">
                  New
                </Badge>
              </Text>
            </VStack>
            <VStack spacing="65px">
              <Link href="./Item" rel="noreferrer">
                <IconButton
                  icon={
                    <Image
                      boxSize="160px"
                      src="https://imageio.forbes.com/specials-images/imageserve/5f7de2ef3dc9728f43a2cce6/wine/960x0.jpg?format=jpg&width=960"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                1992 Screaming Eagle Cabernet Sauvignon
                <Badge ml="1" colorScheme="green">
                  New
                </Badge>
              </Text>
            </VStack>
            <VStack spacing="65px">
              <Link href="./Item" rel="noreferrer">
                <IconButton
                  icon={
                    <Image
                      boxSize="160px"
                      src="https://imageio.forbes.com/specials-images/imageserve/5f7de2ef3dc9728f43a2cce6/wine/960x0.jpg?format=jpg&width=960"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                1992 Screaming Eagle Cabernet Sauvignon
                <Badge ml="1" colorScheme="green">
                  New
                </Badge>
              </Text>
            </VStack>
          </VStack>
        </SimpleGrid>
      </HStack>
    </Box>
  );
};

export default WineMarketplace;
