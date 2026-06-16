import "./Navbar.css"
import { Link } from 'react-router-dom'
import { RiArrowRightUpLine } from "react-icons/ri";


function Navbar() {
	return (
		<nav className="navbar">
			<div>
				<h1 className="text1">FINANCIAL AGENCY<br/> <span>Professional Corporation</span></h1>
			</div>

			<ul className='text-xl'>
				<li><Link to='/us'>About Us</Link></li>
				<li><a href="#services">Services</a></li>
				<li><Link to="/pricing">Pricing</Link></li>
				<li>
					<button className="-center bg-black text-center text-white px-4 py-2 rounded-4xl cursor-pointer">
						<span className='text-xl'>Enterprise</span>
						<RiArrowRightUpLine />
					</button>
				</li>
			</ul>

		</nav>
	)
}

export default Navbar
