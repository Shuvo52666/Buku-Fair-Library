import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductBox from './components/ProductBox/ProductBox';
import { Routes, Route } from "react-router-dom";
import Admin from './Admin';
function App() {
  return (
    <>
      <section>
        <Header />
        
        <ProductBox />
      <Routes>
        <Route path="/admin" element={<Admin />} />  {/* Admin page */}
      </Routes>

      </section>
      <Footer />
    </>

  )
}

export default App;
