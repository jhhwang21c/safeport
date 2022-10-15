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
          <Select placeholder="Sort Option" textColor="black" fontSize="lg">
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
                      src="https://sothebys-md.brightspotcdn.com/dims4/default/1dcd7f8/2147483647/strip/true/crop/2000x2000+0+0/resize/385x385!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2Fd2%2F47%2F3eaa78594804b244d6f2e7e2040e%2Fpf2232-f008068-01.jpg"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                Domaine Leroy Musigny Grand Cru
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
                      src="https://images.ctfassets.net/zpx0hfp3jryq/33Gw14nFdKtAypT5Np471J/0e7c4596c523c839172d63aae6721237/Kabinett.jpg?fm=jpg&fl=progressive"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                Egon Muller Scharzhofberger Riesling Trockenbeerenauslese
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
                      src="https://web-wine-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/uc_product_full/public/IMG_2749.JPG?itok=hN6ZP3iS"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                W J Graham's 'Ne Oublie' Tawny Port
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
                      src="https://images.ctfassets.net/zpx0hfp3jryq/4tTUntkbYIYYEM7DnMacYL/67c68fd2f933d39a59da46fe83fa913c/Coche-Dury_Corton_Grand_Cru_2013.jpg?fm=jpg&fl=progressive"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                Coche-Dury Corton-Charlemagne Grand Cru
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
                      src="https://www.artcurial.com/sites/default/files/styles/840_width/public/lots-images/2017-10-03-18/3249_10600762_0.jpg?itok=TMt8JDny"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                Jacky Truchot Clos de la Roche Grand Cru
                <Badge ml="1" colorScheme="green">
                  New
                </Badge>
              </Text>
            </VStack>
          </VStack>
          <VStack spacing="100px">
            <VStack spacing="65px">
              <Link href="./Item" rel="noreferrer">
                <IconButton
                  icon={
                    <Image
                      boxSize="160px"
                      src="https://d2r9epyceweg5n.cloudfront.net/stores/088/759/products/coleccion-vertical-estiba-reservada1-6d1f1d3c64288570e816367523826465-1024-1024.jpeg"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                Catena Zapata Estiba Reservada
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
                      src="https://cdn.ct-static.com/labels/93507657-a95f-4e87-b244-9c3dcf02a0ed.jpg"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                Rutini 'Felipe Rutini' Blend
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
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWbG79HusHw1QgPVkS1tNus-YQCotfIyX-dA&usqp=CAU"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                Domaine Nico Soeur et Freres Le Paradis Pinot Noir
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
                      src="https://d2r9epyceweg5n.cloudfront.net/stores/097/048/products/rp-premio-zuccardi-gravascal1-4618371c0dce2355cf16551346400970-240-0.png"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                Familia Zuccardi 'Finca Piedra Infinita' Gravascal
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
                      src="https://http2.mlstatic.com/D_NQ_NP_850614-MLA49143584694_022022-O.jpg"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                Michel Rolland Mariflor Arthur y Theo
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
                      src="https://www.thestoryofmywine.com/uploads/rename/microitem-1689/vina-cobos-chanares-estate-malbec-2015.jpg"
                      alt="Wine"
                    />
                  }
                />
              </Link>
              <Text textColor="black" fontSize="sm">
                Vina Cobos Chanares Estate Malbec
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
