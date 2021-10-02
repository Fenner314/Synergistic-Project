import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme, here) => ({
	toolbar: {
		height: '100px',
		backgroundColor: 'white !important',
		position: 'sticky !important',
		display: 'flex',
		flexDirection: 'row !important',
		justifyContent: 'center',
		// alignItems: 'center',
	},
	registerButton: {
		marginTop: '20px !important',
		backgroundColor: 'var(--primary-accent) !important',

		'&:hover': {
			backgroundColor: 'var(--primary-accent-dark) !important',
		},
	},
}))
