import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class LinkedSmurf extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			smurf: null,
		};
	}

	componentDidMount(){
		const smurfId = this.props.match.params.id
		this.fetchSmurf(smurfId);
	}

	fetchSmurf = id => {
		axios
			.get(`http://localhost:3333/smurfs/${id}`)
			.then(response => {
				console.log('linked Smurf Get:', response)
				this.setState( () => ({ smurf: response.data }));
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
   if (!this.state.smurf) {
     return <div>Loading Smurf information...</div>;
   }
   const { name, age, height } = this.state.smurf;
		return (
			<div>
				<h2>{name}</h2>
				<p>Age: {age}</p>
				<p>height: {height}</p>
				<Link to="/surfs"><button>Back to Smurfs</button></Link>
			</div>
		)
	}
}
