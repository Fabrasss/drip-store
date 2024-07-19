import React from "react";

import chuchu from '/Layer1aa2.svg'
import './ProductCard.css'
 

export default function ProductCard() {
    return (
      <>
        {/* <h1 style={{ textAlign: 'center' }}>Produtos em alta</h1> */}
        <div className="container">
          <div>
            <div className="fotodoproduto">
              <img className="kswiss" src={chuchu}  alt="Produto" style={{width: '200px'}} />
              <div className="v8">
                <span className="desconto">30% OFF</span>
              </div>
            </div>
  
            <div className="descricao-produto">
              <p style={{ fontSize: 'small', fontWeight: 'bold' }}>Tênis</p>
              <p style={{ fontSize: 'larger' }}>K-Swiss V8 - Masculino</p>
              <p style={{ fontSize: 'x-large', padding: 0, margin: 0, fontWeight: 'bold' }}>
                <span style={{ textDecoration: 'line-through', color: 'lightgrey' }}>$200</span> $100
              </p>
            </div>
          </div>
        </div>
        
      </>
    );
  }