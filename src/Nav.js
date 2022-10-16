import React from "react";
import { Box, Button, Flex, Image, Spacer, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";

import "./Nav.css";
import Logo from "./assets/images/Logo.png";

import { ethers } from "ethers";

//import AcceptedNFT from './AcceptedNFT.json';

//const acceptedNFTAddress = process.env.REACT_APP_CONTRACT;

//firebase.initializeApp(FirebaseConfig);

//const firestore = firebase.firestore();

const Nav = ({ accounts, setAccounts }) => {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);

  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      /*
            const contract = new ethers.Contract(
                acceptedNFTAddress,
                AcceptedNFT.abi,
                signer
            );
            */
    }
  }

  return (
    <div className="Nav">
      <Flex
        justify="space-between"
        align="center"
        backgroundColor="rgba(0,0,0,0.9)"
        height="90px"
      >
        {/* left side - social media icons */}

        <Box marginLeft="60px">
          <Link to="/pages/Main" rel="noreferrer">
            <Image src={Logo} boxSize="42px" marginLeft="25px" />
            SafePort
          </Link>
        </Box>
        <InputGroup marginLeft="60px">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            value={value}
            onChange={handleChange}
            placeholder="Search Items, Collections, and Wallets"
            width="60%"
            size="md"
            borderRadius="20px"
          />
        </InputGroup>

        {/* right side - website menu */}
        <Flex justify="space-around" align="center" width="55%" padding="30px">
        <Box margin="0 15px">
            <Link
              to="/pages/CreateNFT"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "25px",
              }}
            >
              (mint)
            </Link>
          </Box>
          <Spacer />
          <Box margin="0 15px">
            <Link
              to="/pages/Register"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "25px",
              }}
            >
              Register
            </Link>
          </Box>
          <Spacer />
          <Box margin="0 15px">
          <Link
              to="/pages/MyPage"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "25px",
              }}
            >
              Claim
            </Link>
          </Box>
          <Spacer />
          <Box margin="0 15px">
            <Link
              to="/pages/Marketplace"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "25px",
              }}
            >
              Explore
            </Link>
          </Box>
          <Spacer />
          <Box margin="0 15px">
            <Link
              to="/pages/Museum"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "25px",
              }}
            >
              Museum
            </Link>
          </Box>


          {/* connect */}
          {isConnected ? (
            <Box
              backgroundColor="green"
              fontFamily="inherit"
              borderRadius="5px"
              width="150px"
              fontSize="20px"
              color="white"
              padding="12px"
              margin="0 15px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              textAlign="center"
            >
              Connected
            </Box>
          ) : (
            <Button
              backgroundColor="#D6517D"
              borderRadius="5px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              fontSize="18px"
              width="150px"
              padding="12px"
              height="50px"
              margin="0 15px"
              onClick={() => {
                connectAccount();
              }}
            >
              Connect Wallet
            </Button>
          )}
        </Flex>
      </Flex>
    </div>
  );
};

export default Nav;
