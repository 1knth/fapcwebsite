import "./Navbar.css"
import { FiArrowUpRight } from "react-icons/fi"

function Navbar() {
	return (
		<nav className="navbar">
			<h1 className="heading-2">FINANCIAL AGENCY<br/> <span>Professional Corporation</span></h1>

			<ul>
				<li><a href="">Our Team</a></li>
				<li><a href="#services">Services</a></li>
				<li><a href="#pricing">Pricing</a></li>
				<button className="btn-2">
					<span>Enterprise</span>
					<FiArrowUpRight />
				</button>
			</ul>

		</nav>
	);
}

export default Navbar
