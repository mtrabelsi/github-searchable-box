import React from "react";
import Searchbox from './searchbox';
import Avatarbox from './avatarbox';
import Infobox from './infobox'

class Searchablebox extends React.Component{

	render(){
		return (<div>
					<Searchbox />
					<Avatarbox />
					<Infobox />
				</div>
				)
	}
}



export default Searchablebox;