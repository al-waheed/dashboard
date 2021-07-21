import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

function Navbar() {
	return (
		<div className='main-content'>
			<header>
				<h2>
					<label for="nav-toggle">
						<span><FontAwesomeIcon icon={faBars} className='user' /></span>
					</label>

					Dashboard
				</h2>
				<div className="search-wrapper">
					<span><FontAwesomeIcon icon={faSearch} className='user' /></span>
					<input type="search" placeholder="Search here" />
				</div>

				<div className="user-wrapper">
					<img src='/img/keji.jpg' width="40px" height="40px" alt="" />
					<div>
						<h4>John Doe</h4>
						<small>Super admin</small>
					</div>
				</div>
			</header>
		</div>
	)
}

export default Navbar;
