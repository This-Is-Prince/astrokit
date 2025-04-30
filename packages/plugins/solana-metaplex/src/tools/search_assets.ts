import {
  SearchAssetsRpcInput,
  dasApi,
} from "@metaplex-foundation/digital-asset-standard-api";
import { AstroKit } from "astrokit";
import { initUmi } from "../utils";
import { SolanaWalletBase } from "astrokit";
/**
 * Search for assets using the Metaplex DAS API
 * @param agent AstroKit instance
 * @param params Parameters for searching assets
 * @returns List of assets matching the search criteria
 */
export async function search_assets(
  agent: AstroKit<SolanaWalletBase>,
  params: SearchAssetsRpcInput,
) {
  const umi = initUmi(agent).use(dasApi());
  return await umi.rpc.searchAssets(params);
}
