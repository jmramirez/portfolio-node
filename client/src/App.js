import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header';
import { AboutPage } from './Pages/AboutPage/AboutPage';
import { HomePage } from './Pages/HomePage/HomePage';
import { PortfolioPage } from './Pages/PortfolioPage/PortfolioPage';
import { ContactPage } from './Pages/ContactPage/ContactPage';
import { ProjectPage } from './Pages/ProjectsPage/ProjectPage';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ScrollToTop>
        <Routes>
          <Route path="" element={<HomePage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:name" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        </ScrollToTop>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
