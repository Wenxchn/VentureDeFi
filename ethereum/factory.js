import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0xCD9719549a8b12DA421CDa0e7bEddE9B082970A7'
)

export default instance
