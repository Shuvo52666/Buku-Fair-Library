import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductBox from './components/ProductBox/ProductBox';

function home() {
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

export default home;