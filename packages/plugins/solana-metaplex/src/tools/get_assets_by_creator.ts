import {
  GetAssetsByCreatorRpcInput,
  dasApi,
} from "@metaplex-foundation/digital-asset-standard-api";
import { AstroKit } from "astrokit";
import { initUmi } from "../utils";
import { SolanaWalletBase } from "astrokit";
/**
 * Fetch assets by creator using the Metaplex DAS API
 * @param agent AstroKit instance
 * @param params Parameters for fetching assets by creator
 * @returns List of assets created by the specified creator
 */
export async function get_assets_by_creator(
  agent: AstroKit<SolanaWalletBase>,
  params: GetAssetsByCreatorRpcInput,
) {
  const umi = initUmi(agent).use(dasApi());
  return await umi.rpc.getAssetsByCreator(params);
}
