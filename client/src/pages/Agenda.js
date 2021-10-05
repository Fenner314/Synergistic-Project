import React, { useState } from 'react'
import TimeSlot from '../components/Agenda/TimeSlot'

const timeSlotItems = [
	{
		id: 1,
		time: '10:00am',
		event: 'Event parking opens',
		extra: 'This is additional information for this time slot',
	},
	{
		id: 2,
		time: '11:00am',
		event: 'Event begins',
		extra: 'This is additional information for this time slot',
	},
	{
		id: 3,
		time: '12:00pm',
		event: 'This is when we do this thing',
		extra: 'This is additional information for this time slot',
	},
	{
		id: 4,
		time: '1:00pm',
		event: 'Lunch is served',
		extra: 'This is additional information for this time slot',
	},
	{
		id: 5,
		time: '2:00pm',
		event: 'Bingo, Bango, Bongo contest',
		extra: 'This is additional information for this time slot',
	},
	{
		id: 6,
		time: '3:00pm',
		event: 'Now we will do this other thing',
		extra: 'This is additional information for this time slot',
	},
	{
		id: 7,
		time: '4:00pm',
		event: "Here's where we do the last thing",
		extra: 'This is additional information for this time slot',
	},
	{
		id: 8,
		time: '5:00pm',
		event: 'Event ends',
		extra: null,
	},
]

export default function Agenda() {
	return (
		<div className='agenda-container'>
			<h1>Our Agenda</h1>
			<div className='agenda'>
				{timeSlotItems.map((data) => {
					return (
						<TimeSlot
							key={data.id}
							time={data.time}
							event={data.event}
							extra={data.extra}
						/>
					)
				})}
			</div>
		</div>
	)
}
