import {
  Box,
  Button,
  Text,
  Center,
  Image,
  HStack,
  VStack,
  Badge,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { CheckIcon } from '@chakra-ui/icons'
import { ethers, BigNumber } from "ethers";

const Item = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  return (
    <Center>
      <Box marginTop="200px">
        <HStack spacing="70px">
          <VStack spacing="10px">
            <Image
              boxSize="400px"
              src="https://imageio.forbes.com/specials-images/imageserve/5f7de2ef3dc9728f43a2cce6/wine/960x0.jpg?format=jpg&width=960"
              alt="Wine"
            />
            <Text textColor="black">
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.500" />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.500" />
                  Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.500" />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.500" />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
              </List>
            </Text>
          </VStack>
          <VStack>
            <Text textColor="black" fontSize="lg">
              1992 Screaming Eagle Cabernet Sauvignon
              <Badge ml="1" colorScheme="green" fontSize="0.8em">
                New
              </Badge>
              <Badge ml="1" colorScheme="blue" fontSize="0.8em">
                Validated
              </Badge>
            </Text>
            <Text textColor="black" fontSize="lg">Owner : DK</Text>
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
