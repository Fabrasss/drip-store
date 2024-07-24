import "./ColecaoDestaque.css";
import tenisBranco from "/tenis-certo.png";
import blusa from "/camisa.png";
import headphone from "/fone.png";
import blusaVermelha from "/blusa-vermelha.png";
import calça from "/calça.png";
import smallheadphone from "/smallheadphone.png";
import sneakers from "/sneakers.png";

export default function ColecaoDestaque() {
  return (
    <>
      <div className="box">
        {" "}
        {/*Caixa feita para englobar TODAS as outras*/}
        <h3 className="titulo">Coleção em destaque</h3>{" "}
        {/*Titulo da primeira div*/}
        <div className="container-destaque">
          {" "}
          {/*Conteiner que engloba os 3 banners*/}
          <div className="banner-destaque">
            {" "}
            {/*Caixa que engloba os elementos do banner da esquerda*/}
            <div>
              <div className="desconto-destaque">
                {" "}
                {/*Caixa que engloba o desconto do banner*/}
                <strong>30% OFF</strong>
              </div>
              <h2 className="h2-ian">Novo drop</h2>
              <h2 className="h2-ian">Supreme</h2>
              <button className="botao-destaque">
                {" "}
                {/*Div que engloba o botão de compra do banner*/}
                <h5 className="h5-ian">Comprar</h5>
              </button>
            </div>
            <div>
              {" "}
              {/*Caixa que engloba a imagem do banner*/}
              <img src={blusa} className="img-destaque" />
            </div>
          </div>
          <div className="banner-destaque">
            <div>
              <div className="desconto-destaque">
                <strong>30% OFF</strong>
              </div>
              <h2 className="h2-ian">Coleção</h2>
              <h2 className="h2-ian">Adidas</h2>
              <div className="botao-destaque">
                <h5 className="h5-ian">Comprar</h5>
              </div>
            </div>
            <div>
              <img src={tenisBranco} className="img-destaque" />
            </div>
          </div>
          <div className="banner-destaque">
            <div>
              <div className="desconto-destaque">
                <strong>30% OFF</strong>
              </div>
              <h2 className="h2-ian">Novo</h2>
              <h2 className="h2-ian">Beat Bass</h2>
              <div className="botao-destaque">
                <h5 className="h5-ian">Comprar</h5>
              </div>
            </div>
            <div>
              <img src={headphone} className="img-destaque" />
            </div>
          </div>
        </div>
        <h4 className="h4-ian">Coleção em destaque</h4>
        <div className="container-destaque-2">
          {" "}
          {/*Caixa que engloba os icones e seus elementos*/}
          <div className="coluna">
            {" "}
            {/*Caixa feita para conter os elementos icone e parágrafo*/}
            <div className="icone">
              {" "}
              {/*Caixa para englobar a imagem do icone*/}
              <img src={blusaVermelha} alt="Imagem 1" />
            </div>
            <div>
              <p>Camisetas</p>
            </div>{" "}
            {/*Caixa para englobar o parágrafo*/}
          </div>
          <div className="coluna">
            <div className="icone">
              <img src={calça} alt="Imagem 2" />
            </div>
            <div>
              <p>Calças</p>
            </div>
          </div>
          <div className="coluna">
            <div className="icone">
              <img src={calça} alt="Imagem 3" />
            </div>
            <div>
              <p>Bonés</p>
            </div>
          </div>
          <div className="coluna">
            <div className="icone">
              <img src={smallheadphone} alt="Imagem 4" />
            </div>
            <div>
              <p>Headphones</p>
            </div>
          </div>
          <div className="coluna">
            <div className="icone">
              <img src={sneakers} alt="Imagem 5" />
            </div>
            <div>
              <p>Tênis</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
