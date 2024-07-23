import React from "react";
import './ProductCard.css'

import chuchu from '/Layer1aa2.svg'

 

export default function ProductCard() {
    return (
      <>
        {/* <h1 style={{ textAlign: 'center' }}>Produtos em alta</h1> */}
        <div className="container-cardinho">
          <div className="div-2">
            <div className="fotodoproduto">
              <a href="#">
                <img className="kswiss" src={chuchu}  alt="Produto" />
                </a>
              <div className="v8">
                <span className="desconto">30% OFF</span>
              </div>
            </div>
  
            <div className="descricao-produto">
              <p style={{ fontSize: 'small', fontWeight: 'bold', color: '#8f8f8f' }}>Tênis</p>
              <p style={{ fontSize: 'larger', fontWeight: '400', color: '#474747' }}>K-Swiss V8 - Masculino</p>
              <p style={{ fontSize: 'x-large', padding: 0, margin: 0, fontWeight: 'bold' }}>
                <span style={{ textDecoration: 'line-through', color: 'lightgrey' }}>$200</span> $100
              </p>
            </div>
          </div>
        </div>
        
      </>
    );
  }