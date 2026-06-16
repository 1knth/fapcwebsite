import './App.css'
import './styles/Button.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing.tsx';
import About from './pages/About.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import Footer from './components/Footer.tsx';

function App() {

  return (
			<BrowserRouter>
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
