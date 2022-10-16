import { Box, Button, Flex, Text, Center, Spacer, Input, Image } from "@chakra-ui/react";
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
                    <Text fontSize="50px" fontFamily="Ubuntu" textShadow="0 3px #000000">
                        SafePort
                    </Text>
                    <Text
                        fontSize="35px"
                        letterSpacing="-5.5%"
                        fontFamily="Ubuntu"
                        textShadow="0 2px 2px #000000"
                        color="tomato"
                    >
                        Store your physical items and luxury goods as an NFT
                    </Text>

                    <Text
                        fontSize="30px"
                        letterSpacing="-5.5%"
                        fontFamily="Ubuntu"
                        textShadow="0 2px 2px #000000"
                        marginTop="50px"
                    >
                        How it works
                    </Text>
                    <Text
                        fontSize="30px"
                        letterSpacing="-5.5%"
                        textShadow="0 2px 2px #000000"
                    >
                        1. Register your item on our site
                    </Text>
                    <Text
                        fontSize="30px"
                        letterSpacing="-5.5%"
                        textShadow="0 2px 2px #000000"
                    >
                        2. Send your physical item to our warehouse freeport
                    </Text>
                    <Text
                        fontSize="30px"
                        letterSpacing="-5.5%"
                        textShadow="0 2px 2px #000000"
                    >
                        3. Upon receipt of the item, you will be airdropped an NFT which you
                        can freely trade, auction, or fractionalize
                    </Text>
                </Flex>
            </Flex>
        </div>
    );
};

export default Main;
