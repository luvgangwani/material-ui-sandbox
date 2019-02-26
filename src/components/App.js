import React, { Component, Fragment } from 'react';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';

class App extends Component {

	constructor(props){
		super(props)
	}

	render() { // <Fragment>, like <div> wraps multiple tags but does not generate its markup on the page like <div> does
		return(
			<Fragment>
				<Header />
					<Content />
				<Footer />
			</Fragment>
		)
	}

}

export default App