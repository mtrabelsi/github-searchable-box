import React from 'react'
import './common.css'

class Infobox extends React.Component {
	render(){
		return(<div className='child'>
			<div className='bio quote'>{this.props.bio? this.props.bio : 'this use does not have bio :( '}</div>

			<div className='other'>{this.props.name}</div>
			<div className='other'>	{this.props.location? this.props.location : 'heh no location !'}</div>
			<div className='other'>	<a href={this.props.link} target='_blank'>{this.props.link}</a></div>
			</div>)
		}
}


export default Infobox