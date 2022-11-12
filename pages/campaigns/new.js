import { Component } from 'react'
import { Button, Form, Input, Message } from 'semantic-ui-react'
import Layout from '../../components/Layout'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'
import { Router } from '../../routes'

class New extends Component {
	state = {
		minimumContribution: '',
		errorMessage: '',
		isLoading: false
	}

	onSubmit = async (e) => {
		e.preventDefault()
		this.setState({ isLoading: true, errorMessage: '' })
		try {
			const accounts = await web3.eth.getAccounts()
			await factory.methods.createCampaign(this.state.minimumContribution).send({
				from: accounts[0]
			})
			Router.pushRoute('/')
		} catch (err) {
			this.setState({ errorMessage: err.message })
		}
		this.setState({ isLoading: false })
	}

	render() {
		return (
			<Layout>
				<h3>Create Campaign</h3>
				<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
					<Form.Field>
						<label>Minimum Contribution (Wei)</label>
						<Input
							value={this.state.minimumContribution}
							onChange={(e) => this.setState({ minimumContribution: e.target.value })}
						/>
					</Form.Field>
					<Message error header="Oops!" content={this.state.errorMessage} />
					<Button primary loading={this.state.isLoading}>
						Create!
					</Button>
				</Form>
			</Layout>
		)
	}
}

export default New
