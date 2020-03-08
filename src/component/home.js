import React from 'react';
import poto from '../foto/profile.jpg';

const Home = () => {
	return(
		<div className="container-md">
			<h3 className="title">Profile</h3>
			<hr/>

			<div className="jumbotron text-center">
				<img src={poto} className="rounded-circle" alt="profile" />
				<br/><br/>
				<h1>Walid nurudin</h1>
				<h3>Front End Dev | Gamer</h3>
			</div>

			<div className="jumbotron text-center">
				<h3>Personal data</h3>
    			<div className="row">
				    <div className="col text-center">
				    <hr/>
				      Name : Walid nurudin<br/>
				      City, date of birth : Indramayu, 14 December 2000<br/>
				      Address : Pilang payung RT/RW 01/03 NO 02.<br/>
				      Salamdarma - Anjatan, Indramayu.<br/>
				      Jawa barat. <br/>
				      Nomor telephone : 083102091969<br/>
				      Email : Walidnurudin47@gmail.com<br/>
				    </div>
				    <div className="col text-center">
				    <hr/>
				      Religion : Islam<br/>
				      Gender : Male<br/>
				      Hobby : Football & Gaming<br/>
				      Height : 181cm<br/>
				      Weight : 73kg<br/>
				    </div>
	            </div>
            </div>

            <div className="jumbotron text-center">
		        <h3>Education</h3>
		        <hr/>
	            <div className="row">
	            	<div className="col text-center">
						      2006 - 2012 : SDN SALAMDARMA 1<br/>
						      2012 - 2015 : MTsN 5 INDRAMAYU<br/>
						      2015 - 2018 : SMK AL-HUDA kedungwungu
					</div>
				</div>
            </div>
		</div>
	);
}


export default Home;

