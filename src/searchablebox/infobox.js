import React from 'react'
import './common.css'

class Infobox extends React.Component {
	render(){
		return(<div className='child'>
			<div className='bio quote'>{this.props.bio}</div>

			<div className='other'>
				{this.props.name}
			</div>
			<div className='other'>	{this.props.location}</div>
			<div className='other'>	{this.props.isHeUser}
			</div>
			</div>)
		}
}


export default Infobox