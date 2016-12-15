import React from "react"
import Searchbox from './searchbox'
import Avatarbox from './avatarbox'
import Infobox from './infobox'
import axios from 'axios'

class Searchablebox extends React.Component{
	constructor(props){
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state = {
			bio : '',
			name : '',
			location : '',
			isHeUser : '',
			avatar : ''
		}
	}
	render(){
		return (<div>
					<Searchbox handleChange={this.handleChange} />
					<Avatarbox width={100} height={100} avatarUrl={this.state.avatar} />
					<Infobox bio={this.state.bio} name={this.state.name} location={this.state.location} isHeUser />
				</div>
				)
	}

	handleChange(e){
		axios.get('https://api.github.com/users/'+e.target.value)
			 .then((res) => {
			 	this.setState({
					bio : res.data.bio,
					name : res.data.name,
					location : res.data.location,
					avatar : res.data.avatar_url
				})
			 })
	}
}



export default Searchablebox;