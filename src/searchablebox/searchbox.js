import React from 'react';
import './searchbox.css'
class Searchbox extends React.Component {
	render(){
		return (
			<div className='searchbox'>
				<input type='text' onChange={this.props.handleChange}/>
			</div>
			)
	}
}


export default Searchbox;