import './App.css'
import './styles/Button.css'
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing.tsx';
import About from './pages/About.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import Footer from './components/Footer.tsx';

function ScrollToHash() {
	const location = useLocation()

	useEffect(() => {
		if (!location.hash) return

		const id = decodeURIComponent(location.hash.replace('#', ''))
		const timeout = window.setTimeout(() => {
			document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}, 0)

		return () => window.clearTimeout(timeout)
	}, [location])

	return null
}

function App() {

  return (
			<BrowserRouter>
				<ScrollToHash />
				<Navbar/>
				<div className="App">
					<header className="router-container">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/pricing" element={<Pricing />} />
							<Route path="/us" element={<About />} />
						</Routes>
					</header>
				</div>
				<Footer />
			</BrowserRouter>
  );
}

export default App
