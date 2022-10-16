import { useState } from "react";
import { uploadFileToIPFS, uploadJSONToIPFS } from "../pinata";

import {
  Box,
  Button,
  Flex,
  Text,
  Center,
  Spacer,
  Input,
  Image,
  Select,
  Checkbox,
  HStack
} from "@chakra-ui/react";

export default function Register() {
  const [formParams, updateFormParams] = useState({
    name: "",
    description: "",
  });

  const [itemName, setItemName] = useState("");
  const [request, setRequest] = useState("");

  function register(e) {
    e.preventDefault();

    try {
    } catch (e) {
      alert("Upload error" + e);
    }
  }

  return (
    <Center>
      <Flex
        
        borderRadius="30px"
        w="60%"
        marginTop="140px"
        marginBottom="70px"
        paddingBottom="30px"
        height="600px"
        flexDirection="column"
        justify="center"
        align="center"
      >
        <Text fontSize="30px" textColor="black">Registration Form</Text>

        <Select placeholder="Item Category" color="black" textColor="black" width="250px">
          <option value="option1">Wine</option>
          <option value="option2">Watch</option>
          <option value="option3">Jewelery</option>
          <option value="option3">Antique</option>
          <option value="option3">Other...</option>
        </Select>
        <Input
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
          size="md"
          width="60%"
          marginTop="10px"
        />
        <Input
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          placeholder="Additional Requests (optional)"
          size="md"
          width="60%"
          marginTop="10px"
        />
        <Input
          placeholder="Dimension Size"
          size="md"
          width="60%"
          marginTop="10px"
        />
        <Input
          placeholder="Mobile"
          size="md"
          width="60%"
          marginTop="10px"
        />
        <Input
          placeholder="ENS or full wallet address"
          size="md"
          width="60%"
          marginTop="10px"
        />
        <HStack fontSize="15px" marginTop="20px" color="black">
        <Text textColor="black" fontSize="15px">picture of the item</Text>
        
          <input type={"file"}></input>
        </HStack>

        <Checkbox color="black" size="lg" colorScheme="green" marginTop="10px">
          I agree to Terms and Conditions
        </Checkbox>
        <Text fontSize="20px" textColor="black" letterSpacing="-5.5%">Shipping address 1: XYZ at YYYZ street, Canada</Text>
        <Text fontSize="20px" textColor="black" letterSpacing="-5.5%">Shipping address 2: ABC at SWAG street, ROK</Text>
        <Text fontSize="20px" textColor="black" letterSpacing="-5.5%">
          Include a QR code, ENS, or full wallet address in your shipped item
          alongside a ceriticate of authenticity. Upon receipt, you will be
          minted an NFT of your item
        </Text>
        <Button onClick={register} marginTop="20px" color="green">
          Register
        </Button>
      </Flex>
    </Center>
  );
}
