const hre = require("hardhat");

async function main() {
  console.log("deploying...");
  const MarketInteractions = await hre.ethers.getContractFactory(
    "MarketInteractions"
  );

  // Deploy the contract
  const marketInteractions = await MarketInteractions.deploy(
     "0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A" // Sepolia - PoolAddressesProvider-Aave
    // "0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e"
  );

  // Check if deployment transaction exists
  if (marketInteractions.deployTransaction) {
    // Wait for the deployment transaction to be mined and the contract to be deployed
    await marketInteractions.deployTransaction.wait();

    console.log(
      "MarketInteractions loan contract deployed: ",
      marketInteractions.address
    );
  } else {
    console.error("Deployment transaction was not sent successfully.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
