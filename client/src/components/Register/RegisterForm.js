import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Button } from '@mui/material'
import { useStyles } from '../../styles/material_ui'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export default function RegisterForm() {
	const [success, setSuccess] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setSuccess(false)
		}, 8000)
	}, [success])

	const classes = useStyles()

	const initialValues = {
		firstname: '',
		lastname: '',
		email: '',
		phone: '',
		handicap: 54,
	}

	const validationSchema = Yup.object().shape({
		firstname: Yup.string().required('First name required').max(30),
		lastname: Yup.string().required('Last name required').max(30),
		email: Yup.string().email('Invalid email').required('Email required'),
		phone: Yup.string().max(15),
		handicap: Yup.number()
			.min(1, 'Handicap must be greater than 0')
			.max(54, 'Handicap cannot be greater than 54'),
	})

	const handleSuccess = () => {
		setSuccess(true)
	}

	const onSubmit = (data, { resetForm }) => {
		axios.post('http://localhost:5000/registered', data).then((response) => {
			console.log('Eureka')
			resetForm({})
			setTimeout(() => {
				handleSuccess()
			}, 500)
		})
	}

	return (
		<div className='form-page'>
			<h1>
				Register for <span>Golf for Kids</span>
			</h1>
			{success ? (
				<div className='success'>
					<CheckCircleIcon className={classes.check} />
					<p>Successfully registered for Golf for Kids. See you there!</p>
				</div>
			) : null}

			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				<Form className='form-container'>
					<div className='input-container'>
						<Field id='firstname' classname='input' name='firstname' />
						<span className='floating-label'>First name*</span>
						<ErrorMessage name='firstname' component='span' className='error' />
					</div>
					<div className='input-container'>
						<Field id='lastname' classname='input' name='lastname' />
						<span className='floating-label'>Last name*</span>
						<ErrorMessage name='lastname' component='span' className='error' />
					</div>

					<div className='input-container'>
						<Field id='email' classname='input' name='email' type='email' />
						<span className='floating-label'>Email*</span>
						<ErrorMessage name='email' component='span' className='error' />
					</div>

					<div className='input-container'>
						<Field id='phone' classname='input' name='phone' type='tel' />
						<span className='floating-label'>Phone number</span>
						<ErrorMessage name='phone' component='span' className='error' />
					</div>

					<div className='input-container'>
						<Field
							id='handicap'
							classname='input'
							name='handicap'
							type='number'
						/>
						<span className='floating-label'>Golf handicap</span>
						<ErrorMessage name='handicap' component='span' className='error' />
					</div>
					<Button
						variant='contained'
						className={classes.registerButton}
						type='submit'
					>
						Register
					</Button>
				</Form>
			</Formik>
		</div>
	)
}
