import { Component } from 'react'
import { Button, Card } from 'semantic-ui-react'
import factory from '../ethereum/factory'
import Layout from '../components/Layout'
import { Link } from '../routes'

class Index extends Component {
	static async getInitialProps() {
		const campaigns = await factory.methods.getDeployedCampaigns().call()
		return { campaigns }
	}

	renderCampaigns() {
		const items = this.props.campaigns.map((address) => {
			return {
				header: address,
				description: (
					<Link route={`/campaigns/${address}`}>
						<a>View Campaign</a>
					</Link>
				),
				fluid: true,
				style: { overflowWrap: 'break-word' }
			}
		})
		return <Card.Group items={items} />
	}

	render() {
		return (
			<Layout>
				<h3>Open Campaigns</h3>
				<Link route="/campaigns/new">
					<a>
						<Button content="Create Campaign" icon="add circle" primary floated="right" />
					</a>
				</Link>
				{this.renderCampaigns()}
			</Layout>
		)
	}
}

export default Index
