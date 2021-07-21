import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faShoppingBag, faUsers,} from '@fortawesome/free-solid-svg-icons'
import './Cards.css'
import { faGoogleWallet } from '@fortawesome/free-brands-svg-icons'

function Cards() {
	return (
		<div>
			<div className="cards">

				<div className="card-single">
					<div>
						<h1>54</h1>
						<span>Customers</span>
					</div>
					<div>
						<span><FontAwesomeIcon icon={faUsers} className='user' /></span>
					</div>
				</div>

				<div className="card-single">
					<div>
						<h1>79</h1>
						<span>Projects</span>
					</div>
					<div>
						<span><FontAwesomeIcon icon={faClipboardList} className='Clipboard' /></span>
					</div>
				</div>

				<div className="card-single">
					<div>
						<h1>124</h1>
						<span>Orders</span>
					</div>
					<div>
						<span><FontAwesomeIcon icon={faShoppingBag} className='shopping' /></span>
					</div>
				</div>

				<div className="card-single">
					<div>
						<h1>$6k</h1>
						<span>Income</span>
					</div>
					<div>
						<span><FontAwesomeIcon icon={faGoogleWallet} className='wallet' /></span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cards
