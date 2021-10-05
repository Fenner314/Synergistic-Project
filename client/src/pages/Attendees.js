import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Attendees() {
	const [attendees, setAttendees] = useState([])

	useEffect(() => {
		axios.get('http://localhost:5000/registered').then((response) => {
			setAttendees(response.data)
		})
	}, [])

	return (
		<div className='attendees-page'>
			<h1>Registered Attendees</h1>
			<table className='attendees-table'>
				<thead>
					<tr className='row'>
						<th className='cell'>Last name</th>
						<th className='cell'>First name</th>
						<th className='cell'>Email address</th>
						<th className='cell'>Phone number</th>
						<th className='cell'>Golf handicap</th>
					</tr>
				</thead>
				<tbody>
					{attendees.map((value, key) => {
						return (
							<tr className='row'>
								<td className='cell'>{value.lastname}</td>
								<td className='cell'>{value.firstname}</td>
								<td className='cell'>{value.email}</td>
								<td className='cell'>
									{value.phone ? value.phone : 'None provided'}
								</td>
								<td className='cell'>
									{value.handicap ? value.handicap : 'None provided'}
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}
