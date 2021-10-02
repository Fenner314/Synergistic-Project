import './styles/App.css'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Agenda from './pages/Agenda'
import Register from './pages/Register'

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/agenda' component={Agenda} />
				<Route exact path='/register' component={Register} />
			</Switch>
		</div>
	)
}

export default App
