import React from 'react';

const Contact = () => {
	return(
		<div className="container">
			<h3 className="title">Contact</h3>
			<hr/>
			<form>
			  <div className="form-group">
			    <label forhtml="name">Name :</label>
			    <input type="email" className="form-control" id="name" placeholder="input your name"/>
			  </div>

			  <div className="form-group">
			    <label forhtml="telephone">No telephone :</label>
			    <input type="tel" className="form-control" id="telephone" placeholder="input your nomor telephone"/>
			  </div>

			  <div className="form-group">
			    <label forhtml="email">Email address :</label>
			    <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
			  </div>
			  
			  <div className="form-group">
			    <label forhtml="message">Message :</label>
			    <textarea className="form-control" id="message" rows="5" placeholder="say something. . ."></textarea>
			  </div>

			  <button type="button" className="btn btn-success">Send</button>
			</form>
		</div>
	);
}


export default Contact;