
import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 2
		}
		this.handleIncreaseClick = this.handleIncreaseClick.bind(this);
		this.handleDecreaseClick = this.handleDecreaseClick.bind(this);
	}
	render() {
		return <div>
			{this.state.number}
			<button className="increase" onClick={this.handleIncreaseClick}>Increase</button>
			<button className="decrease" onClick={this.handleDecreaseClick}>Decrease</button>
		</div>;
	}
	handleIncreaseClick(event) {
		this.setState({
			number: this.state.number + 1
		});
	}
	handleDecreaseClick(event) {
		if( this.state.number > 0 ) {
			this.setState({
				number: this.state.number - 1
			});
		}
	}
}

export default Counter;