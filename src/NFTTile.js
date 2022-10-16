import { Link } from "@chakra-ui/react";

import { Box, Button, Flex, Text, Center, Spacer, Input, Image, Stack } from "@chakra-ui/react";

function NFTTile (data) {
    
    return (
        <Flex flexDirection="column" align="center" width="200px" marginTop="40px" marginLeft="20px">
            <Image boxSize='150px' src={data.data.image} alt="" />
            <Text fontSize="20px" letterSpacing="-5.5%">{data.data.title.substring(0,15)+"..."}</Text>
            <Text fontSize="15px" letterSpacing="-5.5%">
                {data.data.description}
            </Text>
            <Button marginTop="20px" color="green">Claim</Button>
            <Button marginTop="20px" color="red">Sell</Button>
        </Flex>
    )
}

export default NFTTile;