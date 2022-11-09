require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift rescue machine unusual gesture lock fog sun'; 
let testAccounts = [
"0x7943529d9e40d04d73de5a53b546f98f531d6eae34450ffe51dfca5d1a032c05",
"0xfb190f0cbfe09efd2ff2fe8dcd19369a0a2d373c9e2e8dd947cc8b1615754366",
"0x8aa289f2706c4e27610671dc00d640669d1a19fc07abb76bd0469a9dd0eb7990",
"0x4a69ab740024bdf3560c3ddfef59e72330d6f2cec26ea42f8526844eaece1260",
"0x27664e8c515626ac6649ec3035d0c4c1625f63c96fc7c4975c68d8c939b8eda1",
"0x919d65c320c20f8d5623efb5e9d7487cd518adff6c2842e5989b376c36ea4b67",
"0xae58f5f2a9a6643aac4fd3020be93485388fe7b5a9cef0439a824a01c13d762d",
"0xa25c2d1eb5e08b67a1528d062cba858c17892584d4da456daffbccc3163826c8",
"0xf13e7d8283cafac65e4934a8c049da91c3ddc3409a074c6b9f07259129430792",
"0xa6a503363d63d47024b1505bef3d4521cd932a9cd86c0630fb12ef9e473a0f3c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

