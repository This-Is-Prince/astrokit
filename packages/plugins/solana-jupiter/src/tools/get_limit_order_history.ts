import type { AstroKit, SolanaWalletBase } from "astrokit";
import { getOrderHistoryApi } from "./common/jupiterLimitApi";

export async function getLimitOrderHistory(agent: AstroKit<SolanaWalletBase>) {
  try {
    const history = await getOrderHistoryApi(agent.wallet.getAddress());
    return { history, success: true };
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching order history: ${error}`);
  }
}
