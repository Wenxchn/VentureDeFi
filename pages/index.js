import { Component } from 'react'
import factory from '../ethereum/factory'

class Index extends Component {
	static async getInitialProps() {
		const campaigns = await factory.methods.getDeployedCampaigns().call()
		return { campaigns }
	}

	render() {
		return <div>{this.props.campaigns[0]}</div>
	}
}

export default Index
