import './App.css'
import './styles/Button.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar.tsx';

function App() {

  return (
		<>
		<Navbar/>
    <BrowserRouter>
      <div className="App">
        <header className="router-container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>

		</>
  );
}

export default App
