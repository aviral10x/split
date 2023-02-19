import { Signer as EthersSigner, providers } from "ethers";
import { useContract, useContractRead } from "wagmi";

export type Signer = EthersSigner | providers.Provider | null | undefined;

function config(signer: Signer) {
  return {
    addressOrName: {
      80001: "0xe84129d07cE098603f88633Ee5f9fF489c779E11",
    }[process.env.CHAIN_ID || 80001]!,
    contractInterface: require("../contracts/Split3.json").abi,
    signerOrProvider: signer,
  };
}

export function useSplitContract(signer: Signer) {
  return useContract(config(signer));
}

export function useSplitContractRead(signer: Signer, functionName: string, args: any[]) {
  return useContractRead(config(signer), functionName, { args });
}
