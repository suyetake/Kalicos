import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => (
	<div>
		<ul>
			<li><Link to="/">Home page</Link></li>
			<li><Link to="/maps">Find a charity</Link></li>
			<li><Link to="/about">About Kalicos</Link></li>
			<li><Link to="/contact">Contact us</Link></li>
		</ul>
		<ul>
			<li>Copyright Kalicos Code for Boulder 2018.</li>
			<li>All rights reserved.</li>
		</ul>
	</div>
)


export default Footer