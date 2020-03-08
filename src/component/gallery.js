import React from 'react';
import poto1 from '../foto/1.jpg';
import poto2 from '../foto/2.jpg';
import poto3 from '../foto/3.jpg';

const Gallery = () => {
	return(
		<div className="container">
			<h3 className="title">Gallery</h3>
			<hr/>
		  <div className="row">
		    <div className="col">
		    	<img src={poto1} alt="Gallery" className="img-thumbnail" />
		    </div>
		    <div className="col">
		    	<img src={poto2} alt="Gallery" className="img-thumbnail" />
		    </div>
		    <div className="col">
		    	<img src={poto3} alt="Gallery" className="img-thumbnail" />
		    </div>
		  </div>
		</div>
	);
}


export default Gallery;