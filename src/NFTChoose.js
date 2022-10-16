import { Link } from "@chakra-ui/react";

import { Box, Button, Flex, Text, Center, Spacer, Input, Image, Stack } from "@chakra-ui/react";

function NFTChoose (data) {
    
    return (
        <Flex flexDirection="column" align="center" marginLeft="5px">
            <Image boxSize='50px' src={data.data.image} alt="" />
            <Text fontSize="12px" letterSpacing="-5.5%">{data.data.title.substring(0,7)+"..."}</Text>
        </Flex>
    )
}

export default NFTChoose;