import { mplCore } from "@metaplex-foundation/mpl-core";
import { mplToolbox } from "@metaplex-foundation/mpl-toolbox";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { fromWeb3JsPublicKey } from "@metaplex-foundation/umi-web3js-adapters";
import { AstroKit, SolanaWalletBase } from "astrokit";
import { PublicKey } from "@solana/web3.js";

export function initUmi(agent: AstroKit<SolanaWalletBase>) {
  const umi = createUmi(agent.wallet.getConnection().rpcEndpoint)
    .use(mplCore())
    .use(mplToolbox());
  umi.identity = {
    publicKey: fromWeb3JsPublicKey(new PublicKey(agent.wallet.getAddress())),
    // @ts-expect-error Umi types are not compatible with AstroKit
    signTransaction: agent.wallet.signTransaction,
    // @ts-expect-error Umi types are not compatible with AstroKit
    signAllTransactions: agent.wallet.signAllTransactions,
    // @ts-expect-error Umi types are not compatible with AstroKit
    signMessage: agent.wallet.signMessage,
  };
  umi.payer = umi.identity;

  return umi;
}
