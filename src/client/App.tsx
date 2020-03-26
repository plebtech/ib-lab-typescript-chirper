import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App: React.FC<AppProps> = () => {
	return (
		<BrowserRouter>
		<Switch>
			<Route exact path="/"></Route>
			<Route exact path="/details/:id"></Route>
			<Route exact path="/admin/:id"></Route>
			<Route exact path="/compose"></Route>
		</Switch>
		</BrowserRouter>
	)
}

interface AppProps { }

export default App;