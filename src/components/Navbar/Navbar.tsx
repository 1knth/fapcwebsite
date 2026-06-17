import "./Navbar.css"
import { Link } from 'react-router-dom'
import { RiArrowRightUpLine } from "react-icons/ri";


function Navbar() {
	return (
		<nav className="navbar tracking-tight">
			<div className='w-fit'>
				<Link to='/' className='inline-block w-fit'>
					<h1 className='font-semibold'>FINANCIAL AGENCY<br/> <span className='font-light opacity-50'>Professional Corporation</span></h1>
				</Link>
			</div>

			<ul className='text-xl'>
				<li><Link to='/us'>About Us</Link></li>
				<li><Link to="/#services">Services</Link></li>
				<li><Link to="/pricing">Pricing</Link></li>
				<li>
					<button className="bg-black text-center text-white px-4 py-1.5 rounded-4xl cursor-pointer">
						<span className='text-xl '>Contact</span>
						<RiArrowRightUpLine />
					</button>
				</li>
			</ul>

		</nav>
	)
}

export default Navbar
