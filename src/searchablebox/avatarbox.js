import React from 'react'
import './common.css'

class Avatarbox extends React.Component{
	render(){
		return (<div className='child'>
					<img src={this.props.avatarUrl} height={this.props.height} width={this.props.width} />
				</div>
				)
	}
}

export default Avatarbox