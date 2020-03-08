import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/home';
import Gallery from './component/gallery';
import Contact from './component/contact';
import Navbar from './component/navbar';
import Footer from './component/footer';
import NoMacth from './component/nomacth';

const Routes = () => {
	return(
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/gallery" component={Gallery} />
				<Route path="/contact" component={Contact} />
				<Route component={NoMacth} />
			</Switch>
			<Footer />
		</BrowserRouter>
	)
}

export default Routes;