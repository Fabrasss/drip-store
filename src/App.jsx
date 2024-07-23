import ColecaoDestaque from "./components/ColecaoDestaque"
import OfertaEspecial from "./components/OfertaEspecial"
import ProductCard from "./components/ProductCard"
import Carrosel from "./components/Carrosel"
import ProductListing from "./components/ProductListing"
import Nav from "./components/Nav"

import Footer from "./components/Footer"
function App() {
  

  return (
    <>
      <div className="body-app">
      <Nav />  
      <Carrosel/>
      <ColecaoDestaque/>
      <ProductListing />
      <OfertaEspecial/>
      <Footer />
    </div>
      
      </>
  )
}

export default App
