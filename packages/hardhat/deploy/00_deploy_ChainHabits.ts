import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployChainHabits: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("ChainHabits", {
    from: deployer,
    // Contract constructor arguments
    args: [],
    log: true,
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  const chainHabits = await hre.ethers.getContract<Contract>("ChainHabits", deployer);
  const chainHabitsAddress = await chainHabits.getAddress();
  console.log("👋 ChainHabits Deployed: ", chainHabitsAddress);

  //verfiy smart contract
  if (hre.network.name !== "localhost" && hre.network.name !== "localFunctionsTestnet") {
    console.log("-----------Verifying Contract-----------");
    await hre.run("verify:verify", {
      address: chainHabitsAddress,
      constructorArguments: [],
    });
  }
};

export default deployChainHabits;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployChainHabits.tags = ["chainHabits"];
