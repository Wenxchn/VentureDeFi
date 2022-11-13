import { Component } from 'react'
import { Button, Form, Input, Message } from 'semantic-ui-react'
import Campaign from '../ethereum/campaign'
import web3 from '../ethereum/web3'
import { Link, Router } from '../routes'

class ContributeForm extends Component {
	state = {
		value: '',
		errorMessage: '',
		isLoading: false
	}

	onSubmit = async (e) => {
		e.preventDefault()
		this.setState({ isLoading: true, errorMessage: '' })
		const campaign = Campaign(this.props.address)
		try {
			const accounts = await web3.eth.getAccounts()
			await campaign.methods.contribute().send({
				from: accounts[0],
				value: web3.utils.toWei(this.state.value, 'ether')
			})
			Router.replaceRoute(`/campaigns/${this.props.address}`)
		} catch (err) {
			this.setState({ errorMessage: err.message })
		}
		this.setState({ isLoading: false, value: '' })
	}

	render() {
		return (
			<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
				<Form.Field>
					<label>Amount to contribute (Ether)</label>
					<Input
						value={this.state.value}
						onChange={(e) => this.setState({ value: e.target.value })}
					/>
				</Form.Field>
				<Message error header="Oops!" content={this.state.errorMessage} />
				<Link route="/">
					<a>
						<Button disabled={this.state.isLoading}>Back</Button>
					</a>
				</Link>
				<Button primary loading={this.state.isLoading}>
					Contribute!
				</Button>
			</Form>
		)
	}
}

export default ContributeForm
