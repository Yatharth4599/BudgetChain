const HDWalletProvider=require('truffle-hdwallet-provider');
const Web3=require('web3');
const compiledFactory=require('./build/CampaignFactory.json');

const provider=new HDWalletProvider(
    //unlock wallet account
   'page veteran drink fan host recall region stand artwork gasp initial lamp',
   //infura api to get one node for test
   'https://rinkeby.infura.io/v3/258dc19209674c7c90614e235f08cb4a'
);

const web3=new Web3(provider);

const deploy= async ()=>{
    const accounts=await web3.eth.getAccounts();
    console.log('appempting to deploy from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: '0x'+compiledFactory.bytecode })
    .send({ from: accounts[0], gas:'1000000' });

    console.log('contract deployed to', result.options.address);
};

deploy();
