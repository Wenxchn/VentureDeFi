import { Component } from 'react'
import { Button, Form, Grid, Input, Message } from 'semantic-ui-react'
import Layout from '../../../components/Layout'
import { Link, Router } from '../../../routes'
import Campaign from '../../../ethereum/campaign'
import web3 from '../../../ethereum/web3'

class RequestsNew extends Component {
	state = {
		value: '',
		description: '',
		recipient: '',
		isLoading: false,
		errorMessage: ''
	}

	static async getInitialProps(props) {
		const { address } = props.query
		return { address }
	}

	onSubmit = async (e) => {
		e.preventDefault()
		this.setState({ isLoading: true, errorMessage: '' })
		const campaign = Campaign(this.props.address)
		const { description, value, recipient } = this.state
		try {
			const accounts = await web3.eth.getAccounts()
			await campaign.methods
				.createRequest(description, web3.utils.toWei(value, 'ether'), recipient)
				.send({ from: accounts[0] })
		} catch (err) {
			this.setState({ errorMessage: err.message })
		}
		this.setState({ isLoading: false })
		Router.pushRoute(`/campaigns/${this.props.address}/requests`)
	}

	render() {
		return (
			<Layout>
				<h3>Create a Request</h3>
				<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
					<Form.Field>
						<label>Description</label>
						<Input
							value={this.state.description}
							onChange={(e) => this.setState({ description: e.target.value })}
						/>
					</Form.Field>
					<Form.Field>
						<label>Value in Ether</label>
						<Input
							value={this.state.value}
							onChange={(e) => this.setState({ value: e.target.value })}
						/>
					</Form.Field>
					<Form.Field>
						<label>Recipient</label>
						<Input
							value={this.state.recipient}
							onChange={(e) => this.setState({ recipient: e.target.value })}
						/>
					</Form.Field>
					<Message error header="Oops!" content={this.state.errorMessage} />
					<Grid>
						<Grid.Column>
							<Grid.Row>
								<Button primary loading={this.state.isLoading}>
									Create
								</Button>
								<Link route={`/campaigns/${this.props.address}/requests`}>
									<a>
										<Button>Cancel</Button>
									</a>
								</Link>
							</Grid.Row>
						</Grid.Column>
					</Grid>
				</Form>
			</Layout>
		)
	}
}

export default RequestsNew
