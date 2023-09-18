// @ts-check
async function run() {
  const { create } = await import("ipfs-http-client");
  const ipfs = await create();

  /** @type {import('ipfs-core-types/src/utils').ImportCandidate} */
  const metadata = {
    path: "/",
    content: JSON.stringify({
      name: "Surf NFT",
      attributes: [
        {
          trait_type: "Background",
          value: "Earth",
        },
        {
          trait_type: "Surfboard",
          value: "Yellow",
        },
        {
          trait_type: "Level",
          value: 1,
        },
        {
          trait_type: "Stamina",
          value: 20.5,
        },
        {
          display_type: "boost_number",
          trait_type: "Aqua power",
          value: 40,
        },
        {
          display_type: "boost_percentage",
          trait_type: "Stamina Increase",
          value: 10,
        },
        {
          display_type: "number",
          trait_type: "Generation",
          value: 1,
        },
      ],
      // update the IPFS CID to be your image CID
      image:
        "https://ipfs.io/ipfs/QmdeZAivwFM9Xo5ZT6TzbGLZbYjZTmQzwiy72cGmVsTNgq",
      description: "Astronaut surfing in the space",
    }),
  };

  const result = await ipfs.add(metadata);
  console.log(result);

  process.exit(0);
}

run();
