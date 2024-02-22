import React, {Component} from 'react';
import './ImgComp.css';

class ImgComp extends Component {
	render() {
		return(
			<div>
				<img src={process.env.PUBLIC_URL + '/bear_image.png'} alt="Profile Pic" />
			</div>
		);
	}
}

export default ImgComp;