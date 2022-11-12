import { Menu } from 'semantic-ui-react'

const Header = () => {
	return (
		<Menu style={{ marginTop: 10 }}>
			<Menu.Item>VentureDeFi</Menu.Item>
			<Menu.Menu position="right">
				<Menu.Item>Campaigns</Menu.Item>
				<Menu.Item>+</Menu.Item>
			</Menu.Menu>
		</Menu>
	)
}

export default Header
