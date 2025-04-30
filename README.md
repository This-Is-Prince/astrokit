# AstroKit

AstroKit is an SDK for connecting AI agents to web3 protocols. It provides a streamlined way for AI agents to interact with various blockchain networks and protocols.

## Overview

AstroKit enables seamless integration between AI agents and blockchain protocols, with a primary focus on Solana and Ethereum (EVM) ecosystems. The SDK is structured in a modular way, allowing developers to use only the components they need for their specific use case.

## Project Structure

- **Core**: Main SDK functionality (`astrokit`)
- **Plugins**: Protocol-specific integrations, predominantly for Solana ecosystems
- **Wallets**: Wallet implementations for Solana and EVM

## Installation

```bash
npm install astrokit
# or
yarn add astrokit
# or
pnpm add astrokit
```

For specific plugins or wallets, install them separately:

```bash
npm install @astrokit/plugin-solana-adrena
npm install @astrokit/wallet-solana
# etc.
```

## Available Packages

### Core
- `astrokit`: Main SDK package

### Wallets
- `@astrokit/wallet-solana`: Solana wallet implementation
- `@astrokit/wallet-evm`: Ethereum/EVM wallet implementation

### Plugins (Solana Ecosystem)
- `@astrokit/plugin-solana-adrena`: Integration with Adrena protocol
- `@astrokit/plugin-solana-jupiter`: Jupiter integration
- `@astrokit/plugin-solana-raydium`: Raydium integration
- `@astrokit/plugin-solana-orca`: Orca integration
- `@astrokit/plugin-solana-pyth`: Pyth Network integration
- `@astrokit/plugin-solana-metaplex`: Metaplex integration
- `@astrokit/plugin-solana-tensor`: Tensor integration
- And many more...

## Development

### Prerequisites

- Node.js >= 18
- pnpm >= 8

### Setting Up

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Build the packages:
   ```bash
   pnpm build
   ```

### Scripts

- `pnpm clean` - Clean all build artifacts
- `pnpm build` - Build all packages
- `pnpm build:core` - Build only the core package
- `pnpm lint` - Run linter
- `pnpm lint:fix` - Run linter and fix issues
- `pnpm format` - Format code

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.
