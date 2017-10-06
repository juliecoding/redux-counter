import React, { Component, PropTypes } from "react";
import {connect} from "react-redux";
import "./App.css";

import {increment} from "./ducks/counter";
import {decrement} from "./ducks/counter";
import {undo} from "./ducks/counter";
import {redo} from "./ducks/counter";

export class App extends Component {
	render() {
		const{
			count
			, decrement
			, increment
			, redo
			, undo
			, previousValues
			, futureValues
		} = this.props;
		//const decrement = this.props.decrement;
		console.log(this.props);
		return (
			<div className="app">
				<section className="counter">
					<h1 className="counter__current-value">{ count }</h1>
					<div className="counter__button-wrapper">
						<button
							className="counter__button increment-one"
							onClick={ () => increment(1) }
						>
							+1
						</button>
						<button
							className="counter__button increment-five"
							onClick={ () => increment(5) }
						>
							+5
						</button>
						<button
							className="counter__button decrement-one"
							onClick={ () => decrement(1) }
						>
							-1
						</button>
						<button
							className="counter__button decrement-five"
							onClick={ () => decrement(5) }
						>
							-5
						</button>
						<br />
						<button
							className="counter__button undo"
							disabled={ previousValues.length === 0 }
							onClick={ undo }
						>
							Undo
						</button>
						<button
							className="counter__button redo"
							disabled={ futureValues.length === 0 }
							onClick={ redo }
						>
							Redo
						</button>
					</div>
				</section>
				<section className="state">
					<pre>
						{ JSON.stringify( this.props, null, 2 ) }
					</pre>
				</section>
			</div>
		);
	}
}

App.propTypes = {    //Helps you fix bugs!!!!! 
	count: PropTypes.number.isRequired
	, decrement: PropTypes.func.isRequired
	, increment: PropTypes.func.isRequired
	, futureValues: PropTypes.arrayOf(PropTypes.number).isRequired
	, previousValues: PropTypes.arrayOf(PropTypes.number).isRequired
	, redo: PropTypes.func.isRequired
	, undo: PropTypes.func.isRequired
}

function mapStateToProps(state) {
	return state;
}
const decorator = connect(mapStateToProps, {decrement, increment, undo, redo});
const decoratedComponent = decorator(App);

export default decoratedComponent;

//export default connect(mapStateToProps, {increment})(App to props) ???? 
