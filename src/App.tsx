import './App.css'
import './styles/Button.css'
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing.tsx';
import About from './pages/About.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Book from './pages/Book.tsx';

function ScrollHandler() {
	const location = useLocation()

	useEffect(() => {
		const timeout = window.setTimeout(() => {
			if (location.hash) {
				const id = decodeURIComponent(location.hash.replace('#', ''))
				document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
				return
			}

			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
		}, 0)

		return () => window.clearTimeout(timeout)
	}, [location.pathname, location.hash])

	return null
}

function App() {

  return (
			<BrowserRouter>
				<ScrollHandler />
				<Navbar/>
				<div className="App">
					<header className="router-container">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/pricing" element={<Pricing />} />
							<Route path="/us" element={<About />} />
							<Route path="/book" element={<Book />} />
						</Routes>
					</header>
				</div>
				<Footer />
			</BrowserRouter>
  );
}

export default App
