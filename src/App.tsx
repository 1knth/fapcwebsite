import './App.css'
import './styles/Button.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing.tsx';
import Navbar from './components/Navbar/Navbar.tsx';

function App() {

  return (
			<BrowserRouter>
				<Navbar/>
				<div className="App">
					<header className="router-container">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/pricing" element={<Pricing />} />
						</Routes>
					</header>
				</div>
			</BrowserRouter>
  );
}

export default App
