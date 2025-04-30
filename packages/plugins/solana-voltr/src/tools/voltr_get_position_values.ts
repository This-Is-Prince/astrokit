import { PublicKey } from "@solana/web3.js";
import { VoltrClient } from "@voltr/vault-sdk";
import type { AstroKit, SolanaWalletBase } from "astrokit";

/**
 * Gets the value of assets in a Voltr vault
 * @param agent AstroKit instance
 * @param vault Public key of the target vault
 * @returns Position and total values for the vault
 */
export async function voltrGetPositionValues(
  agent: AstroKit<SolanaWalletBase>,
  vault: PublicKey,
): Promise<string> {
  const vc = new VoltrClient(agent.wallet.getConnection());
  const positionAndTotalValues =
    await vc.getPositionAndTotalValuesForVault(vault);

  return JSON.stringify(positionAndTotalValues);
}
