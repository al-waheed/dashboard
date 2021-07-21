import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faClipboardList, faIgloo, faReceipt, faShoppingBag, faUserCircle, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faAsymmetrik } from '@fortawesome/free-brands-svg-icons'
import './Sidebar.css'

function Sidebar() {
	return (
		<div>
			<input type="checkbox" id="nav-toggle" />
			<div className='sidebar'>
				<div className='sidebar-brand'>
					<h2><span><FontAwesomeIcon icon={faAsymmetrik} className='archway' /></span><span>Asymmetrik</span></h2>
				</div>

				<div className='sidebar-menu'>
					<ul>
						<li>
							<a href="!#" className='active'><span><FontAwesomeIcon icon={faIgloo}/></span>
								<span>Dashboard</span></a>
						</li>
						<li>
							<a href="!#"><span><FontAwesomeIcon icon={faUsers} /></span>
								<span>Customers</span></a>
						</li>
						<li>
							<a href="!#"><span><FontAwesomeIcon icon={faClipboard} /></span>
								<span>Projects</span></a>
						</li>
						<li>
							<a href="!#"><span><FontAwesomeIcon icon={faShoppingBag} /></span>
								<span>Orders</span></a>
						</li>
						<li>
							<a href="!#"><span><FontAwesomeIcon icon={faReceipt} /></span>
								<span>Inventory</span></a>
						</li>
						<li>
							<a href="!#"><span><FontAwesomeIcon icon={faUserCircle} /></span>
								<span>Accounts</span></a>
						</li>
						<li>
							<a href="!#"><span><FontAwesomeIcon icon={faClipboardList} /></span>
								<span>Tasks</span></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Sidebar;
