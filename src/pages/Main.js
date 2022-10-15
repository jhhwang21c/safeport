import { Box, Button, Flex, Text, Center, Spacer, Input, Image } from '@chakra-ui/react';
import { ethers, BigNumber } from 'ethers';

import './Main.css';

function Main(props) {
    const { navibarProps } = props;
  
    return (
        <Flex justify="center" align="center" width="100%" flexDirection="column">
        <Flex bg='rgba(0,0,0,0.2)' borderRadius="30px" w='70%' marginTop="170px" paddingBottom="30px" height="300px" flexDirection="column" justify="center">
            <Text fontSize="50px" fontFamily="Ubuntu" textShadow="0 3px #000000">SafePort</Text>
            <Text
                fontSize="40px"
                letterSpacing="-5.5%"
                fontFamily="Ubuntu"
                textShadow="0 2px 2px #000000"
                color='tomato'
            >
                'your stuff 2 nft'</Text>
            <Text
                fontSize="30px"
                letterSpacing="-5.5%"
                fontFamily="Ubuntu"
                textShadow="0 2px 2px #000000"
            >
                We safely store you stuffz
            </Text>
        </Flex>
        </Flex>
    );
  }
  
  export default Main;