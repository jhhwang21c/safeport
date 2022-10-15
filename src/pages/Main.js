import { Box, Button, Flex, Text, Center, Spacer, Input, Image } from '@chakra-ui/react';
import { ethers, BigNumber } from 'ethers';

import './Main.css';
import AcceptedNFT from '../AcceptedNFT.json';
import samplenft from '../assets/images/samplenft.png';
import batman from '../assets/images/batman_avatar.png';
import timeline from '../assets/images/DAOtimeline.png';

const acceptedNFTAddress = process.env.REACT_APP_CONTRACT;

const Main = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    const mintAmount = 1;
    const mintValue = 0.001;

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                acceptedNFTAddress,
                AcceptedNFT.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((mintValue * mintAmount).toString()),
                });
                //window.location.reload();
                console.log('response: ', response);
            } catch (err) {
                console.log("error: ", err);
            }
        }
    }

    return (
        <div className="overlay">
            <Center>
                <Flex justify="center" align="center" width="100%" flexDirection="column">
                    <Flex bg='rgba(0,0,0,0.2)' borderRadius="30px" w='70%' marginTop="170px" paddingBottom="30px" height="300px" flexDirection="column" justify="center">
                        <Text fontSize="50px" fontFamily="Ubuntu" textShadow="0 3px #000000">Accepted DAO</Text>
                        <Text
                            fontSize="40px"
                            letterSpacing="-5.5%"
                            fontFamily="Ubuntu"
                            textShadow="0 2px 2px #000000"
                            color='tomato'
                        >
                            'Teach 2 Earn & Learn'</Text>
                        <Text
                            fontSize="30px"
                            letterSpacing="-5.5%"
                            fontFamily="Ubuntu"
                            textShadow="0 2px 2px #000000"
                        >
                            Accepted DAO is a decentralized college counseling and peer tutoring organization.
                        </Text>
                    </Flex>

                    <Flex flexDirection="row" width="75%" >
                        <Box bg='rgba(0,0,0,0.2)' borderRadius="30px" w='47%' marginBottom="30px" marginTop="70px">
                            <Text
                                fontSize="30px"
                                letterSpacing="-5.5%"
                                fontFamily="Ubuntu"
                                textShadow="0 2px 2px #000000"
                            >
                                Are you a prospective college student?
                            </Text>
                            <Flex justify="center" align="center" flexDirection="row">
                                <img src={batman} width='150px' alt="sample nft" />
                                <Box w="220px" marginLeft='20px'>
                                    <Text
                                        fontSize="21px"
                                        fontFamily="Ubuntu"
                                        textAlign="start"
                                    >
                                        mint your membership nft for only 0.001ETH
                                    </Text>
                                </Box>
                            </Flex>

                            {isConnected ? (
                                <div>
                                    <Flex align="center" justify="center">
                                        <Button
                                            backgroundColor="#D6517D"
                                            borderRadius="5px"
                                            boxShadow="0px 2px 2px 1px #0F0F0F"
                                            color="white"
                                            cursor="pointer"
                                            fontFamily="inherit"
                                            fontSize="20px"
                                            padding="12px"
                                            marginTop="15px"
                                            marginBottom="15px"
                                            position="relative"
                                            bottom="10px"
                                            onClick={handleMint}
                                        >
                                            Join Now!
                                        </Button>
                                    </Flex>
                                </div>
                            ) : (
                                <>
                                    <Text
                                        fontSize="20px"
                                        fontFamily="Ubuntu"
                                        paddingLeft="50px"
                                        paddingRight="50px"
                                        marginBottom="-10px"
                                    >You must be connected to your Metamask wallet to mint your membership NFT.</Text>
                                    <Text
                                        fontSize="20px"
                                        fontFamily="Ubuntu"
                                        paddingLeft="50px"
                                        paddingRight="50px"
                                    > Press connect button at the top-right corner to connect your metamask wallet.</Text>
                                </>
                            )}


                        </Box>
                        <Spacer />

                        <Box bg='rgba(0,0,0,0.2)' borderRadius="30px" w='47%' marginBottom="30px" marginTop="70px">

                            <Text
                                fontSize="30px"
                                letterSpacing="-5.5%"
                                fontFamily="Ubuntu"
                                textShadow="0 2px 2px #000000"
                            >
                                Are you a college student?
                            </Text>
                            <Flex justify="center" align="center" flexDirection="row">
                                <img src={samplenft} width='150px' alt="sample nft" />
                                <Box w="220px" marginLeft='20px'>
                                    <Text
                                        fontSize="21px"
                                        fontFamily="Ubuntu"
                                        textAlign="start"
                                    >
                                        mint your membership nft for only 0.001ETH
                                    </Text>
                                </Box>
                            </Flex>


                            {isConnected ? (

                                <Flex align="center" justify="center" flexDirection="row" width="95%">
                                    <Input id="email" placeholder='School Email Required' size="sm" backgroundColor='white' width="50%"/>
                                    <Button
                                        backgroundColor="#D6517D"
                                        borderRadius="5px"
                                        boxShadow="0px 2px 2px 1px #0F0F0F"
                                        color="white"
                                        cursor="pointer"
                                        fontFamily="inherit"
                                        fontSize="20px"
                                        padding="12px"
                                        marginTop="20px"
                                        marginLeft="15px"
                                        position="relative"
                                        bottom="10px"
                                        onClick={handleMint}
                                    >
                                        Join Now!
                                    </Button>
                                </Flex>

                            ) : (
                                <>
                                    <Text
                                        fontSize="20px"
                                        fontFamily="Ubuntu"
                                        paddingLeft="50px"
                                        paddingRight="50px"
                                        marginBottom="-10px"
                                    >You must be connected to your Metamask wallet to mint your membership NFT.</Text>
                                    <Text
                                        fontSize="20px"
                                        fontFamily="Ubuntu"
                                        paddingLeft="50px"
                                        paddingRight="50px"
                                    > Press connect button at the top-right corner to connect your metamask wallet.</Text>
                                </>
                            )}
                        </Box>
                    </Flex>
                    <div>
                        <Text
                            fontSize="40px"
                            fontFamily="Ubuntu"
                            textShadow="0 2px 2px #000000"
                            marginBottom="-50px"
                            marginTop="50px"
                        >
                            Our Timeline</Text>
                        <Image src={timeline} alt='timeline' />
                    </div>
                </Flex>
            </Center>
        </div>
    );

};

export default Main;