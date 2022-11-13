import { Container } from 'semantic-ui-react'
import Header from './Header'
import Head from 'next/head'

const Layout = (props) => {
	return (
		<Container style={{ paddingTop: 20 }}>
			<Head>
				<link
					async
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
				/>
			</Head>
			<Header />
			{props.children}
		</Container>
	)
}

export default Layout
