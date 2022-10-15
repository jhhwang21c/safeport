import { Link } from "@chakra-ui/react";

import { Box, Button, Flex, Text, Center, Spacer, Input, Image, Stack } from "@chakra-ui/react";

function NFTTile (data) {
    
    return (
        <Box boxSize="200px">
        <Stack>
            <Image boxSize='150px' src={data.data.image} alt="" />
            <Text>{data.data.title}</Text>
            <Text>
                {data.data.description}
            </Text>
        </Stack>
        </Box>
    )
}

export default NFTTile;