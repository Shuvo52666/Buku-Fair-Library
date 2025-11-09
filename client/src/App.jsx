import './App.css'
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import ProductBox from './components/ProductBox/ProductBox';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './home';
import Admin from './Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>  
  )
}

export default App;
