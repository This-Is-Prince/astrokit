# AstroKit Core

AstroKit is a multi-chain SDK that provides a unified interface for interacting with different blockchains using a plugin-based architecture. Currently, it supports both EVM (Ethereum Virtual Machine) chains and Solana, with the ability to extend to other chains in the future.

## Architecture Overview

The AstroKit architecture is designed around these key components:

1. **Core SDK**: The base framework that provides common functionality and interfaces
2. **Chain Adapters**: Components that adapt chain-specific wallet implementations to a common interface
3. **Plugins**: Extensions that add specific functionality for different protocols and use cases
4. **Actions**: High-level operations that can be executed by AI agents or applications

## Key Components

### AstroKit Class

The `AstroKit` class is the main entry point for using the SDK. It:

- Connects to a specific blockchain via a wallet
- Loads and manages plugins
- Provides methods to execute actions

### Wallet Adapters

Wallet adapters abstract away chain-specific wallet implementations, providing a unified interface:

- `EVMWalletAdapter`: For Ethereum and other EVM-compatible chains
- `SolanaWalletAdapter`: For Solana

### Plugins

Plugins extend the SDK with additional functionality:

- Each plugin can support one or multiple chains
- Plugins provide methods and actions
- Plugins can be combined to create rich experiences

### Actions

Actions are high-level operations that can be executed:

- Each action has a unique ID, name, and description
- Actions specify which chains they support
- Actions provide an execution function that performs the operation

## Using AstroKit

### Installation

```bash
npm install @astrokit/core
```

### Getting Started

```typescript
import { AstroKit } from '@astrokit/core';
import { EVMWalletAdapter } from '@astrokit/core/wallets';
import { chains } from '@astrokit/core/chains';
import { EVMPlugin } from '@astrokit/evm';

// Create a wallet adapter
const wallet = new EVMWalletAdapter(yourEthersWalletOrProvider, chains.ethereum);

// Create AstroKit instance
const astro = new AstroKit(wallet);

// Add EVM plugin
const astroWithEvm = astro.use(new EVMPlugin());

// Use plugin methods
const balance = await astroWithEvm.methods.getBalance();

// Execute an action
const result = await astroWithEvm.executeAction('send-eth', {
  to: 'recipient-address',
  amount: '0.1',
});
```

### Using Multiple Chains

AstroKit can be used with different chains:

```typescript
// For EVM chains
const evmWallet = new EVMWalletAdapter(yourEthersWallet, chains.ethereum);
const evmAstro = new AstroKit(evmWallet).use(new EVMPlugin());

// For Solana
const solanaWallet = new SolanaWalletAdapter(yourSolanaWallet, chains.solana);
const solanaAstro = new AstroKit(solanaWallet).use(new SolanaDefiPlugin());
```

## Creating Plugins

You can create custom plugins by extending the `PluginBase` class:

```typescript
import { PluginBase } from '@astrokit/core';

export class MyPlugin extends PluginBase {
  constructor() {
    const methods = {
      myMethod: async (agent, param1, param2) => {
        // Implementation
      }
    };
    
    const actions = [
      {
        id: 'my-action',
        name: 'My Action',
        description: 'Does something cool',
        supportedChains: ['evm', 'solana'],
        execute: async (params) => {
          // Implementation
        }
      }
    ];
    
    super('my-plugin', methods, actions, ['evm', 'solana']);
  }
  
  initialize(agent) {
    // Custom initialization
    super.initialize(agent);
  }
}
```

## Architecture Benefits

1. **Unified Interface**: Work with multiple chains using a consistent API
2. **Extensibility**: Add new chains and protocols without changing the core
3. **Composability**: Combine plugins to create rich experiences
4. **Type Safety**: Full TypeScript support with intelligent typing
5. **AI Ready**: Designed to work with AI agents through a clear action system

## License

Apache-2.0 