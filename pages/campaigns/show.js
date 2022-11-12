import { Component } from 'react'
import { Card } from 'semantic-ui-react'
import Layout from '../../components/Layout'
import Campaign from '../../ethereum/campaign'
import web3 from '../../ethereum/web3'

class Show extends Component {
	static async getInitialProps(props) {
		const campaign = Campaign(props.query.address)
		const summary = await campaign.methods.getSummary().call()
		return {
			miminumContribution: summary[0],
			balance: summary[1],
			requestsCount: summary[2],
			approversCount: summary[3],
			manager: summary[4]
		}
	}

	renderCards = () => {
		const { balance, manager, miminumContribution, requestsCount, approversCount } = this.props

		const items = [
			{
				header: manager,
				meta: 'Address of Manager',
				description: 'The manager created this campaign and can create requests to withdraw ETH.',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: miminumContribution,
				meta: 'Minimum Contribution of Wei',
				description: 'You must contribute at least this much Wei to support this campaign.',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: requestsCount,
				meta: 'Number of Requests',
				description: 'A request tries to withdraw ETH from this campaign to transfer.',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: approversCount,
				meta: 'Number of Donators to this campaign',
				description: 'Number of people who have already donated to this campaign.',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: web3.utils.fromWei(balance, 'ether'),
				meta: 'Campaign Balance (Ether)',
				description: 'This balance is how much ETH this campaign has to spend.',
				style: { overflowWrap: 'break-word' }
			}
		]
		return <Card.Group items={items} />
	}

	render() {
		return (
			<Layout>
				<h3>Campaign Details</h3>
				{this.renderCards()}
			</Layout>
		)
	}
}

export default Show
