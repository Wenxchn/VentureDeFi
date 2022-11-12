import { Menu } from 'semantic-ui-react'
import { Link } from '../routes'

const Header = () => {
	return (
		<Menu style={{ marginTop: 10 }}>
			<Link route="/">
				<a className="item">VentureDeFi</a>
			</Link>
			<Menu.Menu position="right">
				{/* <Link>Campaigns</Link>
				<Link>+</Link> */}
				<Link route="/">
					<a className="item">Campaigns</a>
				</Link>
				<Link route="/campaigns/new">
					<a className="item">+</a>
				</Link>
			</Menu.Menu>
		</Menu>
	)
}

export default Header
