# https://www.youtube.com/watch?v=qs4KK9zD_9U
# init 
```shell
npx hardhat init
```

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.
```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
npx hardhat console
```

```shell
npm i @aave/core-v3 dotenv

npx hardhat run --network sepolia scripts/deployMarketInteractions.js 
```

# copy contract code and goto https://remix.ethereum.org/
# compile contract
# deploy At Address: 0x0865Ecd12d03484779bb1903CeefAc4E4A720c5C
# send some LINK at above contract address
# test with GetBalance -> 0x779877A7B0D9E8603169DdbD7836e478b4624789
# POOL -> returns address of the AAVE pool
# approveLINK -> 1000000000000000000, 0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951(POOL)
# test with allowanceLINK -> 0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951