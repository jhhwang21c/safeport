const hre = require("hardhat");

async function main() {

  const AcceptedNFT = await hre.ethers.getContractFactory("AcceptedNFT");
  const acceptedNFT = await AcceptedNFT.deploy();

  await acceptedNFT.deployed();

  console.log("AcceptedNFT deployed to:", acceptedNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });