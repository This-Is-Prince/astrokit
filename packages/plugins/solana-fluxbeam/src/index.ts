import { SolanaChain, PluginBase, SolanaWalletBase } from "astrokit";

import fluxbeamCreatePoolAction from "./actions/createPool";
import { fluxBeamCreatePool } from "./tools/create_pool";

class FluxbeamPlugin extends PluginBase<SolanaWalletBase> {
    constructor() {
        const methods = {
            fluxBeamCreatePool,
        };

        const actions = [
            fluxbeamCreatePoolAction,
        ];

        const supportedChains = [
            {
                type: "solana",
            } as SolanaChain
        ];

        super("fluxbeam", methods, actions, supportedChains);
    }

    supportsWallet(wallet: SolanaWalletBase): boolean {
        return wallet instanceof SolanaWalletBase;
    }
}

export default FluxbeamPlugin;
