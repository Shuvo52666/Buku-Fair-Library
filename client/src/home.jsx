import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductBox from './components/ProductBox/ProductBox';
import { useState } from 'react';

function home() {
      const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <section>
        <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        
        <ProductBox searchTerm={searchTerm}/>


      </section>
      <Footer />
    </>

  )
}

export default home;