const hre = require("hardhat");

async function main() {

  const SafePortNFT = await hre.ethers.getContractFactory("SafePortNFT");
  const safePortNFT = await SafePortNFT.deploy();

  await safePortNFT.deployed();

  console.log("SafePortNFT deployed to:", safePortNFT.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });