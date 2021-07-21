import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faComment, faPhoneAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import './Cards.css'
import React from 'react'
import './MainMenu.css'

function MainMenu() {
	return (
		<div className='recent-grid'>
			<div className='projects'>
				<div className='card'>
					<div className='card-header'>
						<h3>Recent Projects</h3>
						<button>
							See all <span><FontAwesomeIcon icon={faArrowCircleRight} /></span>
						</button>
					</div>

					<div className='card-body'>
						<div className='table-responsive'>
							<table width="100%">
								<thead>
									<tr>
										<td>Project Title</td>
										<td>Department </td>
										<td>Status</td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>UI/UX Design</td>
										<td>UI Team</td>
										<td><span className='status purple'></span> review</td>
									</tr>
									<tr>
										<td>Web Development</td>
										<td>Frontend</td>
										<td><span className='status pink'></span> in progress</td>
									</tr>
									<tr>
										<td>Ushop app</td>
										<td>Mobile Team</td>
										<td><span className='status orange'></span> pending</td>
									</tr>
									<tr>
										<td>UI/UX Design</td>
										<td>UI Team</td>
										<td><span className='status purple'></span> review</td>
									</tr>
									<tr>
										<td>Web Development</td>
										<td>Frontend</td>
										<td><span className='status pink'></span> in progress</td>
									</tr>
									<tr>
										<td>Ushop app</td>
										<td>Mobile Team</td>
										<td><span className='status orange'></span> pending</td>
									</tr>
									<tr>
										<td>UI/UX Design</td>
										<td>UI Team</td>
										<td><span className='status purple'></span> review</td>
									</tr>
									<tr>
										<td>Web Development</td>
										<td>Frontend</td>
										<td><span className='status pink'></span> in progress</td>
									</tr>
									<tr>
										<td>Ushop app</td>
										<td>Mobile Team</td>
										<td><span className='status orange'></span> pending</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<div className='customers'>
				<div className='card'>
					<div className='card-header'>
						<h3>New Customer</h3>
						<button>
							See all <span><FontAwesomeIcon icon={faArrowCircleRight} /></span>
						</button>
					</div>

					<div className='card-body'>
						<div className='customer'>
							<div className='info'>
								<img src='/img/keji.jpg' width="40px" height="40px" alt="" />
								<div>
									<h4>Lewis S. Cunningham</h4>
									<small>CEO Expert</small>
								</div>
							</div>
							<div className='contact'>
								<span><FontAwesomeIcon icon={faUserCircle} /></span>
								<span><FontAwesomeIcon icon={faComment} /></span>
								<span><FontAwesomeIcon icon={faPhoneAlt} /></span>
							</div>
						</div>
						<div className='customer'>
							<div className='info'>
								<img src='/img/keji.jpg' width="40px" height="40px" alt="" />
								<div>
									<h4>Lewis S. Cunningham</h4>
									<small>CEO Expert</small>
								</div>
							</div>
							<div className='contact'>
								<span><FontAwesomeIcon icon={faUserCircle} /></span>
								<span><FontAwesomeIcon icon={faComment} /></span>
								<span><FontAwesomeIcon icon={faPhoneAlt} /></span>
							</div>
						</div>
						<div className='customer'>
							<div className='info'>
								<img src='/img/keji.jpg' width="40px" height="40px" alt="" />
								<div>
									<h4>Lewis S. Cunningham</h4>
									<small>CEO Expert</small>
								</div>
							</div>
							<div className='contact'>
								<span><FontAwesomeIcon icon={faUserCircle} /></span>
								<span><FontAwesomeIcon icon={faComment} /></span>
								<span><FontAwesomeIcon icon={faPhoneAlt} /></span>
							</div>
						</div>
						<div className='customer'>
							<div className='info'>
								<img src='/img/keji.jpg' width="40px" height="40px" alt="" />
								<div>
									<h4>Lewis S. Cunningham</h4>
									<small>CEO Expert</small>
								</div>
							</div>
							<div className='contact'>
								<span><FontAwesomeIcon icon={faUserCircle} /></span>
								<span><FontAwesomeIcon icon={faComment} /></span>
								<span><FontAwesomeIcon icon={faPhoneAlt} /></span>
							</div>
						</div>
						<div className='customer'>
							<div className='info'>
								<img src='/img/keji.jpg' width="40px" height="40px" alt="" />
								<div>
									<h4>Lewis S. Cunningham</h4>
									<small>CEO Expert</small>
								</div>
							</div>
							<div className='contact'>
								<span><FontAwesomeIcon icon={faUserCircle} /></span>
								<span><FontAwesomeIcon icon={faComment} /></span>
								<span><FontAwesomeIcon icon={faPhoneAlt} /></span>
							</div>
						</div>
						<div className='customer'>
							<div className='info'>
								<img src='/img/keji.jpg' width="40px" height="40px" alt="" />
								<div>
									<h4>Lewis S. Cunningham</h4>
									<small>CEO Expert</small>
								</div>
							</div>
							<div className='contact'>
								<span><FontAwesomeIcon icon={faUserCircle} /></span>
								<span><FontAwesomeIcon icon={faComment} /></span>
								<span><FontAwesomeIcon icon={faPhoneAlt} /></span>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainMenu;