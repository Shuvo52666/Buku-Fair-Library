import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductBox from './components/ProductBox/ProductBox';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <section>
        <Header />
        
        <ProductBox />

      </section>
      <Footer />
    </>

  )
}

export default App;
