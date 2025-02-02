// @ts-check
const { ethers } = require("hardhat");

async function main() {
  // if you changed the name of the contract, be sure to update this here!
  const MyToken = await ethers.getContractFactory("SurfNFT");

  const nft = await MyToken.deploy();

  await nft.deployed();

  console.log("NFT deployed to:", nft.address);

  // mint one to yourself!
  const signer0 = await ethers.provider.getSigner(0);
  // update the IPFS CID to be your metadata CID
  await nft.safeMint(
    await signer0.getAddress(),
    "ipfs://QmZDoybeL3Uh16yCTb8yenEjtKFeUkYjPHVvNaA6bxBSgu",
  );

  console.log("NFT Minted!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
