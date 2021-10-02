import './styles/App.css'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Agenda from './pages/Agenda'
import Register from './pages/Register'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme()

function App() {
	return (
		<div className='app'>
			<ThemeProvider theme={theme}>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/agenda' component={Agenda} />
					<Route exact path='/register' component={Register} />
				</Switch>
			</ThemeProvider>
		</div>
	)
}

export default App
