import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
	toolbar: {
		height: '100px',
		backgroundColor: 'white !important',
		position: 'sticky !important',
		display: 'flex',
		flexDirection: 'row !important',
		justifyContent: 'center',

		'@media (min-width: 678px) and (max-width: 830px)': {
			justifyContent: 'flex-end !important',
		},
	},
	menu: {
		position: 'absolute',
		left: '20px',
		top: '20px',
		color: 'black',
		fontSize: '3rem !important',
		cursor: 'pointer',
	},
	toRegister: {
		marginTop: '20px !important',
		backgroundColor: 'var(--primary-accent) !important',

		'&:hover': {
			backgroundColor: 'var(--primary-accent-dark) !important',
		},
	},
	registerButton: {
		backgroundColor: 'var(--secondary-accent) !important',

		'&:hover': {
			backgroundColor: 'var(--secondary-accent-dark) !important',
		},
	},
	extendIcon: {
		position: 'absolute !important',
		right: '5px',
		cursor: 'pointer',
	},
	check: {
		marginRight: '10px',
	},
}))
