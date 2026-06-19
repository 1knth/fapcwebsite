import "./Navbar.css"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowRightUpLine } from "react-icons/ri";


function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		let ticking = false

		const handleScroll = () => {
			if (ticking) return

			ticking = true
			window.requestAnimationFrame(() => {
				const scrollY = window.scrollY

				setIsScrolled((current) => {
					if (current) return scrollY > 8
					return scrollY > 80
				})

				ticking = false
			})
		}

		handleScroll()
		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<nav className={`navbar tracking-tight ${isScrolled ? 'scrolled' : ''}`}>
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
					<Link to='/book' className='nav-button bg-black text-white w-30 px-4 py-1.5 rounded-4xl cursor-pointer'>
						<span className='text-xl'>Contact</span>
						<RiArrowRightUpLine />
					</Link>
				</li>
			</ul>

		</nav>
	)
}

export default Navbar
