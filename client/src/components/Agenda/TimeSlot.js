import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useStyles } from '../../styles/material_ui'

export default function TimeSlot(props) {
	const [dropdown, setDropdown] = useState(false)

	const { time, event, extra } = props

	const classes = useStyles()

	const handleDropdownChange = () => {
		setDropdown(!dropdown)
	}

	return (
		<div className='slot' style={{ maxHeight: dropdown ? '100px' : '43px' }}>
			<p>
				{time} - {event}
			</p>
			<p className='extra'>{extra}</p>
			{extra ? (
				<KeyboardArrowDownIcon
					className={classes.extendIcon}
					style={{
						transition: 'transform .1s linear',
						transform: dropdown ? 'rotate(180deg)' : 'rotate(0deg)',
					}}
					onClick={handleDropdownChange}
				/>
			) : null}
		</div>
	)
}
