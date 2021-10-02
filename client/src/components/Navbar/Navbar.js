import React from 'react'
import logoWide from '../../assets/png/bb4k-wide-logo.png'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { useStyles } from '../../styles/material_ui'
import { Link } from 'react-router-dom'

const ElevationScroll = (props) => {
	const { children, window } = props

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	})

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	})
}

export default function Navbar(props) {
	const classes = useStyles()

	return (
		<>
			<ElevationScroll {...props}>
				<AppBar className={classes.toolbar}>
					<Link to='/'>
						<img className='nav-logo' src={logoWide} width='250px' alt='logo' />
					</Link>
					<ul className='links' style={{ color: 'black' }}>
						<Link to='/'>
							<li>Home</li>
						</Link>
						<Link to='/agenda'>
							<li>Agenda</li>
						</Link>
						<Link to='/register'>
							<li>Register</li>
						</Link>
					</ul>
				</AppBar>
			</ElevationScroll>
		</>
		// <div className='navbar'>
		// 	<img className='nav-logo' src={logoWide} width='250px' alt='logo' />
		// 	<ul className='links'>
		// 		<li>Home</li>
		// 		<li>Agenda</li>
		// 		<li>Register</li>
		// 	</ul>
		// </div>
	)
}
