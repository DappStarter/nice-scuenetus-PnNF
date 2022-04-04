require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun foot curtain rival noble smile inner process slot gauge'; 
let testAccounts = [
"0x9629ff12a16740786241cb9c05c1655f11c66cf6c62d7958438bcbcc2c6ca308",
"0x67031771e04997105593ff009ccb77340ba9bb8012a96af496ca38f7ec250bb0",
"0x8a3ce1619ae88de86854227401ead5712abf4f31bd34805a1bfe2f1ff6386374",
"0x8dfb13308e433c447060a3333875cff5ff73bb865caf20a18774fcfa4f592cfb",
"0x4fa22737637ba36856c3c5a0db8824d2b5851b24bb1f16e8cbda33b10d9fe45c",
"0x0fcc54ec74b2c15215f20023f2100042637b712b3126c9e228e2a220ba75ae4f",
"0x7f8320c24fb47fa39436e7904a7f8ba5aeada82b88671943f4da9ef689ddb036",
"0x334f80d43c1ecda6f5af9361abb5ec53aa9b879b67f83d15d5d6a4cdc371fd61",
"0x70709bb45bfc6c68e4495bed60bf35784680985e2463c83036ff8ba705f6a48c",
"0x656765dcc85b46437278ed22af350d7f1da3ef6cd4ed0e6985952706f1af5d7c"
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

