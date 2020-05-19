import React from 'react';

import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';

import ConParametros from './ConParametros';
import About from './About';
import Home from './Home';
import Dashboard from './Dashboard';

class App extends React.Component {
	render = () => {
		 return (
			 <Router>
				<header>
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<Link className="navbar-brand" to="/">
							Mp
						</Link>
						<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
							<div className="navbar-nav">
								<NavLink 
									activeClassName="active" 
									className="nav-item nav-link" 
									to="/home"
								>
									Home
								</NavLink>
								<NavLink 
									activeClassName="active" 
									className="nav-item nav-link" 
									to="/about"
								>
									About
								</NavLink>
								<NavLink 
									activeClassName="active" 
									className="nav-item nav-link" 
									to="/dashboard"
								>
									Dashboard
								</NavLink>
								<NavLink 
									activeClassName="active" 
									className="nav-item nav-link" 
									to="/conparametros/2"
								>
									Con Parametros
								</NavLink>
							</div>
						</div>
					</nav>
				 </header>
				 <main className="container">
					<Switch>
						<Route exact path="/">
							{/* Componente que queremos que carge */}
							<Home></Home>
						</Route>
						<Route exact path="/home">
							{/* Componente que queremos que carge */}
							<Home></Home>
						</Route>
						<Route path="/about">
							{/* Componente que queremos que carge */}
							<About></About>
						</Route>
						<Route path="/dashboard">
							{/* Componente que queremos que carge */}
							<Dashboard></Dashboard>
						</Route>

						<Route path="/conparametros/:id">
							{/* Componente que queremos que carge */}
							<ConParametros></ConParametros>
						</Route>
					</Switch>
				 </main>
				 
			 </Router>
		 )
	}
}

export default App;
