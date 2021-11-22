import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header';
import { AboutPage } from './Pages/AboutPage/AboutPage';
import { HomePage } from './Pages/HomePage/HomePage';
import { PortfolioPage } from './Pages/PortfolioPage/PortfolioPage';
import { ContactPage } from './Pages/ContactPage/ContactPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<HomePage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
