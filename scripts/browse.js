// @ts-check
const { ethers } = require("hardhat");

const nftAddress = "0x524D1Db0dFc3B5bc69Af7E9c7a54549af7424B64";

const browse = async () => {
  const sig = await ethers.provider.getSigner(0);
  const surfNFT = await ethers.getContractAt("SurfNFT", nftAddress, sig);
  const tokenURI = await surfNFT.connect(sig).tokenURI(0);
  console.log("Token URI", tokenURI);
};

browse().catch((err) => console.error("Browse error: ", err));
