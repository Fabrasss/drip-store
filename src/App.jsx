import React, { useState } from "react";
import ColecaoDestaque from "./components/ColecaoDestaque";
import OfertaEspecial from "./components/OfertaEspecial";
import ProductCard from "./components/ProductCard";
import Carrosel from "./components/Carrosel";
import ProductListing from "./components/ProductListing";
import Header from "./components/Header";
import Footer from "./components/Footer";

//Passa o estado e a função de incremento para os componentes Header e ProductListing//

//Nesta função temos um estado que foi definido como 'carrinho' e uma função chamada 'setCarrinho'
function App() {
  const [carrinho, setCarrinho] = useState(0);

  //A função 'adicionarItem' incrementa o valor do estado 'carrinho
  //A função 'setCarrinho' é usado para atualizar o estado
  const adicionarItem = () => {
    setCarrinho(carrinho + 1);
  };
  return (
    <>
      <div className="body-app">
        <Header carrinho={carrinho} />
        <Carrosel />
        <ColecaoDestaque />
        <ProductListing adicionarItem={adicionarItem} />
        <OfertaEspecial />
        <Footer />
      </div>
    </>
  );
}

export default App;
