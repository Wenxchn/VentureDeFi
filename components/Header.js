import { Menu } from 'semantic-ui-react'
import { Link } from '../routes'

const Header = () => {
	return (
		<div>
			<Link route="/">
				<a className="item" style={{ fontWeight: 'bold', fontSize: 32 }}>
					VentureDeFi
				</a>
			</Link>
			<div style={{ fontWeight: 'bold', fontSize: 14, marginTop: 5, marginLeft: 5 }}>
				Crowdfunding through DeFi
			</div>
		</div>
	)
}

export default Header
