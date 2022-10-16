import {
  Box,
  Button,
  Flex,
  Text,
  Center,
  Spacer,
  Input,
  Image,
} from "@chakra-ui/react";
import { ethers, BigNumber } from "ethers";

import "./Main.css";

const Main = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  return (
    <div className="overlay">
      <Flex justify="center" align="center" width="100%" flexDirection="column">
        <Flex
          bg="rgba(0,0,0,0.5)"
          borderRadius="30px"
          w="80%"
          marginTop="70px"
          marginBottom="70px"
          paddingBottom="30px"
          height="500px"
          flexDirection="column"
          justify="center"
        >
          <Text fontSize="50px" fontFamily="Ubuntu" textShadow="0 3px #000000" color="white">
            SafePort.
          </Text>
          <Text
            fontSize="35px"
            letterSpacing="-5.5%"
            fontFamily="Ubuntu"
            textShadow="0 2px 2px #000000"
            color="tomato"
          >
            The boundary between the physical and the digital.
          </Text>

          <Text
            fontSize="30px"
            letterSpacing="-5.5%"
            fontFamily="Ubuntu"
            textShadow="0 2px 2px #000000"
            marginTop="50px"
            color="white"
          >
            How it works
          </Text>
          <Text
            fontSize="30px"
            letterSpacing="-5.5%"
            textShadow="0 2px 2px #000000"
            color="white"
          >
            1. Register your item on our site
          </Text>
          <Text
            fontSize="30px"
            letterSpacing="-5.5%"
            textShadow="0 2px 2px #000000"
            color="white"
          >
            2. Send your physical item to our warehouse freeport
          </Text>
          <Text
            fontSize="30px"
            letterSpacing="-5.5%"
            textShadow="0 2px 2px #000000"
            color="white"
          >
            3. Upon receipt of the item, you will be airdropped an NFT which you
            can freely trade, auction, or fractionalize
          </Text>
        </Flex>
        <Flex
          bg="rgba(0,0,0,0.8)"
          borderRadius="30px"
          w="80%"
          marginTop="70px"
          marginBottom="70px"
          paddingBottom="30px"
          height="650px"
          flexDirection="column"
          justify="center"
        >
          <Text fontSize="40px" fontFamily="Ubuntu" textShadow="0 3px #000000" color="white">
            With SafePort, you can access unparalleled liquidity and safekeeping
            of your physical items by storing them as an NFT.
          </Text>

          <Text
            fontSize="20px"
            letterSpacing="-5.5%"
            textShadow="0 2px 2px #000000"
            marginTop="20px"
            color="white"
          >
            Storing an item with SafePort is simple. First, you connect your
            wallet, register, and send in an item to one of our physical
            addresses. Upon receipt and verification, you will receive a digital
            NFT that you can always redeem for the physical item. You can apply
            for an additional certification of authenticity to add an on-chain
            marker vouching for the item’s value. These items can include things
            like valuable paintings, wine and whisky, rare antiques and
            collectibles like baseball cards, coins, and stamps, all the way to
            luxury goods like watches, clothing, handbags, and jewelry. In the
            long run, we will expand our offerings into cars, houses, and
            mansions.
          </Text>
          
          <Text
            fontSize="20px"
            letterSpacing="-5.5%"
            textShadow="0 2px 2px #000000"
            marginTop="20px"
            color="white"
          >
            - You can trade or transfer your item 24/7 in our decentralized
            marketplace{" "}
          </Text>
          <Text
            fontSize="20px"
            letterSpacing="-5.5%"
            textShadow="0 2px 2px #000000"
            marginTop="20px"
            color="white"
          >
            - You can track the item's providence and ownership over time by
            tracing public transactions on the blockchain
          </Text>
          <Text
            fontSize="20px"
            letterSpacing="-5.5%"
            textShadow="0 2px 2px #000000"
            marginTop="20px"
            color="white"
          >
            - You can put your item down as collateral to apply for loans on-chain
          </Text>
          <Text
            fontSize="20px"
            letterSpacing="-5.5%"
            textShadow="0 2px 2px #000000"
            marginTop="20px"
            color="white"
          >
            - You can fractionalize your item into fungible tokens and allow
            others to invest and share in its upside, especially if your item
            becomes more valuable with age and its price goes up over time
          </Text>
          <Text
            fontSize="20px"
            letterSpacing="-5.5%"
            textShadow="0 2px 2px #000000"
            marginTop="20px"
            color="white"
          >
            - You can lend your item to our partner museums to receive passive
            ticketing revenue.
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default Main;
