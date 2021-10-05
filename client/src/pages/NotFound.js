import React from 'react'
import dino from '../assets/png/dino.png'

export default function NotFound() {
	return (
		<div className='not-found-page'>
			<h1>
				Sorry, we couldn't find the page you were looking for, but enjoy this
				picture of a dinosaur!
			</h1>
			<img src={dino} width='300px' alt='Dinosaur' />
		</div>
	)
}
