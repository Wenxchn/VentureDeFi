import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0xb486fC7619cC16BB0C9e35cb2aA07ade7A7C82C9'
)

export default instance
