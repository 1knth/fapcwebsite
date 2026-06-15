import "./Navbar.css"
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from "react-icons/fi"

function Navbar() {
	return (
		<nav className="navbar">
			<h1 className="text1">FINANCIAL AGENCY<br/> <span>Professional Corporation</span></h1>

			<ul className='text-lg'>
				<li><Link to='/us'>Our Team</Link></li>
				<li><a href="#services-container">Services</a></li>
				<li><Link to="/pricing">Pricing</Link></li>
				<li>
					<button className="btn-2">
						<span>Enterprise</span>
						<FiArrowUpRight />
					</button>
				</li>
			</ul>

		</nav>
	)
}

export default Navbar
