import ProductCard from "./ProductCard"
import './ProductListing.css'
import seta from '/Right24px.svg'

export default function ProductListing() {
    return (
    <div className="div-daddy">
        <div className="titulo-product">
            <h2 className="product-em-altas">Produtos em alta</h2>
            <p className="verprodutos">Ver Produtos <img className="setinha" src={seta} /></p>
        </div>
        <div className="container-card">
            
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
      
        </div>
    </div>
    )
};