import {
  DasApiAsset,
  dasApi,
} from "@metaplex-foundation/digital-asset-standard-api";
import { publicKey } from "@metaplex-foundation/umi";
import { AstroKit } from "astrokit";
import { initUmi } from "../utils";
import { SolanaWalletBase } from "astrokit";
/**
 * Fetch asset details using the Metaplex DAS API
 * @param agent AstroKit instance
 * @param assetId ID of the asset to fetch
 * @returns Asset details
 */
export async function get_asset(
  agent: AstroKit<SolanaWalletBase>,
  assetId: string,
): Promise<DasApiAsset> {
  try {
    const umi = initUmi(agent).use(dasApi());

    return await umi.rpc.getAsset(publicKey(assetId));
  } catch (error: any) {
    console.error("Error retrieving asset: ", error.message);
    throw new Error(`Asset retrieval failed: ${error.message}`);
  }
}
