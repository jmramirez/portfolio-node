import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
