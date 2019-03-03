// Deploying the contract using Infure API
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    // account mnemonic
    'song armor motor avocado congress direct tooth crater gospel recall shock naive',
    // infura api link to rinkeby network
    'https://rinkeby.infura.io/v3/12d282246aa744a381f196b69a191eb2'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
       .deploy({data: bytecode})
       .send({ gas: '1000000', from: accounts[0]});
    // const result = await new web3.eth.Contract(JSON.parse(interface))
    //     .deploy({data: '0x' + bytecode, arguments: ['Hello again!']})
    //     .send({from: accounts[0]});
    console.log(interface);
    console.log('contract deployed to address', result.options.address);
};
deploy();
