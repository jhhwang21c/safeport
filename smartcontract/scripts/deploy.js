const hre = require("hardhat");

async function main() {

  const SafePortNFT = await hre.ethers.getContractFactory("SafePortNFT");
  const safePortNFT = await SafePortNFT.deploy();

  await safePortNFT.deployed();

  console.log("SafePortNFT deployed to:", safePortNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });