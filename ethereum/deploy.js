const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
const compiledFactory = require('../ethereum/build/CampaignFactory.json')
require('dotenv').config()

// Make sure to include your own .env and never share your Mnemonic with anyone
const provider = new HDWalletProvider(process.env.MNEMONIC, process.env.GOERLI_LINK)
const web3 = new Web3(provider)

const deploy = async () => {
	const accounts = await web3.eth.getAccounts()
	console.log('Attempting to deploy from account', accounts[0])
	const res = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({
			data: compiledFactory.bytecode
		})
		.send({ gas: 1000000, from: accounts[0] })
	console.log('Contract deployed to', res.options.address)
	provider.engine.stop()
}
deploy()
