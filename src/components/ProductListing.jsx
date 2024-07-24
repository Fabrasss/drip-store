import React from "react";
import ProductCard from "./ProductCard";
import "./ProductListing.css";
import seta from "/Right24px.svg";

export default function ProductListing({ adicionarItem }) {
  return (
    <div className="div-daddy">
      <div className="titulo-product">
        <h2 className="product-em-altas">Produtos em alta</h2>
        <p className="verprodutos" style={{ color: "#c92071" }}>
          Ver Produtos <img className="setinha" src={seta} />
        </p>
      </div>
      <div className="container-card">
        <ProductCard desconto="50" adicionarItem={adicionarItem} />
        <ProductCard desconto="50" adicionarItem={adicionarItem} />
        <ProductCard adicionarItem={adicionarItem} />
        <ProductCard adicionarItem={adicionarItem} />
        <ProductCard adicionarItem={adicionarItem} />
        <ProductCard adicionarItem={adicionarItem} />
        <ProductCard adicionarItem={adicionarItem} />
        <ProductCard adicionarItem={adicionarItem} />
      </div>
    </div>
  );
}
