import React, { useEffect, useState } from 'react'
import logoWide from '../../assets/png/bb4k-wide-logo.png'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
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
	const [mobileView, setMobileView] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 678
				? setMobileView(true)
				: setMobileView(false)
		}

		setResponsiveness()
		window.addEventListener('resize', () => setResponsiveness())

		return () => {
			window.removeEventListener('resize', () => setResponsiveness())
		}
	}, [])

	const classes = useStyles()

	const displayDesktop = () => {
		return (
			<AppBar className={classes.toolbar}>
				<Link to='/'>
					<img
						className='nav-logo'
						src={logoWide}
						width='250px'
						alt='logo'
						style={{ position: mobileView ? 'relative' : 'absolute' }}
					/>
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
		)
	}
	const displayMobile = () => {
		return (
			<AppBar className={classes.toolbar}>
				<MenuIcon className={classes.menu} onClick={handleMenu} />
				<Link to='/'>
					<img
						className='nav-logo'
						src={logoWide}
						width='250px'
						alt='logo'
						style={{ position: mobileView ? 'relative' : 'absolute' }}
					/>
				</Link>
				<ul
					className='mobile-links'
					style={{
						color: 'black',
						transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
					}}
				>
					<Link to='/' onClick={handleMenu}>
						<li>Home</li>
					</Link>
					<Link to='/agenda' onClick={handleMenu}>
						<li>Agenda</li>
					</Link>
					<Link to='/register' onClick={handleMenu}>
						<li>Register</li>
					</Link>
				</ul>
			</AppBar>
		)
	}

	const handleMenu = () => {
		setMenuOpen((prevState) => !prevState)
	}

	return (
		<>
			<ElevationScroll {...props}>
				{mobileView ? displayMobile() : displayDesktop()}
			</ElevationScroll>
		</>
	)
}
