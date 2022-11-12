const path = require('path')
const solc = require('solc')
const fs = require('fs-extra')

// Delete our build folder
const buildPath = path.resolve(__dirname, 'build')
fs.removeSync(buildPath)

// Read Campaign.sol
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol')
const source = fs.readFileSync(campaignPath, 'utf-8')

// Compile Smart Contracts
const output = solc.compile(source, 1).contracts

// Write to build folder
fs.ensureDirSync(buildPath)
for (let contract in output) {
	fs.outputJSONSync(path.resolve(buildPath, contract.replace(':', '') + '.json'), output[contract])
}
