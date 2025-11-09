import './App.css'
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import ProductBox from './components/ProductBox/ProductBox';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import Admin from './Admin';

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App;
