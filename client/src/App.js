import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header';
import {ScrollToTop} from "./components/ScrollToTop/ScrolloToTop";
import {HomePage} from "./Pages/HomePage/HomePage";
import {AboutPage} from "./Pages/AboutPage/AboutPage";
import {PortfolioPage} from "./Pages/PortfolioPage/PortfolioPage";
import { ProjectPage } from './Pages/ProjectsPage/ProjectPage';
import {ContactPage} from "./Pages/ContactPage/ContactPage";


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
