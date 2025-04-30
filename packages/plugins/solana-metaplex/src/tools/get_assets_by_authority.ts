import {
  GetAssetsByAuthorityRpcInput,
  dasApi,
} from "@metaplex-foundation/digital-asset-standard-api";
import { AstroKit } from "astrokit";
import { initUmi } from "../utils";
import { SolanaWalletBase } from "astrokit";
/**
 * Fetch assets by authority using the Metaplex DAS API
 * @param agent AstroKit instance
 * @param params Parameters for fetching assets by authority
 * @returns List of assets associated with the given authority
 */
export async function get_assets_by_authority(
  agent: AstroKit<SolanaWalletBase>,
  params: GetAssetsByAuthorityRpcInput,
) {
  const umi = initUmi(agent).use(dasApi());
  return await umi.rpc.getAssetsByAuthority(params);
}
