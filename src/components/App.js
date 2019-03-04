import React, { Component, Fragment } from 'react';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';

import { muscles, exercises } from '../store';

class App extends Component {

	constructor(props){
		super(props)

		this.state = {
			exercises
		}

		this.getExercisesByMuscles = this.getExercisesByMuscles.bind(this);
	}

	getExercisesByMuscles(){

		return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
			const { muscles } = exercise;

			exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]

			return exercises;
		}, {}))

	}

	render() { // <Fragment>, like <div> wraps multiple tags but does not generate its markup on the page like <div> does

		console.log(this.getExercisesByMuscles())

		return(
			<Fragment>
				<Header />
					<Content
					exercises={this.getExercisesByMuscles()} />
				<Footer 
				muscles={muscles}/>
			</Fragment>
		)
	}

}

export default App