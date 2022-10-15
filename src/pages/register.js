import { Box, Button, Flex, Text, Center, Spacer, Input, Image } from "@chakra-ui/react";
import { ethers, BigNumber } from "ethers";


const Register = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    return (
        <Center>
            <Box marginTop="200px"><Text textColor="black">Register page</Text></Box>
        </Center>
    );
};

export default Register;
