import './styles/App.css'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Agenda from './pages/Agenda'
import Register from './pages/Register'
import { ThemeProvider, createTheme } from '@mui/material'
import Attendees from './pages/Attendees'
import NotFound from './pages/NotFound'

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
					<Route exact path='/attendees' component={Attendees} />
					<Route component={NotFound} />
				</Switch>
			</ThemeProvider>
		</div>
	)
}

export default App
