import React from 'react'
import golfBack from '../../assets/jpg/golfBack2.jpg'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { useStyles } from '../../styles/material_ui'

export default function GolfInfo() {
	const classes = useStyles()

	return (
		<div className='golf-section'>
			<img
				className='golf-background'
				src={golfBack}
				width='100%'
				alt='background'
			/>
			<div className='golf-info'>
				<div className='golf-banner'>
					<h2 className='sc'>Golf For Kids</h2>
					<p>A golf event for our kids.</p>
					<p>July 25th, 2021 at Willow Run Golf Course</p>
				</div>
				<div className='golf-showcase'>
					<ul>
						<li>Starts at 11:00am</li>
						<li>Hosted lunch, raffles, and additional games</li>
						<li>Bingo, Bango, Bongo contest</li>
						<li>Take home a goodie bag!</li>
						<li>Great opportunity to help our kids</li>
					</ul>
				</div>
				<div className='golf-register'>
					<p>Join us for an afternoon of fun and helping kids!</p>
					<Link to='/register'>
						<Button variant='contained' className={classes.toRegister}>
							Register
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}
