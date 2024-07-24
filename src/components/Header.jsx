import React from "react";
import logodigital from "/logo-digital-college.png";
import "./Header.css";
import iconecarrinho from "/icone-carrinho.png";
import Search from "/Search.png";

//O componente Header recebe um prop chamada 'carrinho' ela será usada para exibir a quantidade de itens no carrinho.
export default function Header({ carrinho }) {
  //retorna a estrutura da nav//
  return (
    <div>
      <div className="nav">
        <div className="nav-1">
          <div>
            <img
              className="image-logo"
              src={logodigital}
              alt="Logo da Digital College"
            />
          </div>

          <div className="search-container">
            <input id="search" type="text" placeholder="Pesquisar produto..." />
            <button className="button-search" type="submit">
              <img src={Search} alt="lupa de pesquisa" />
            </button>
          </div>

          <div className="buttons">
            <button className="register-button">
              <span className="text-button">Cadastre-se</span>
            </button>
            <button className="enter-button">
              <span className="text-button-2">Entrar</span>
            </button>
          </div>
          <div className="icon-carrinho">
            <img
              className="icone-carrinho"
              src={iconecarrinho}
              alt="icone de carrinho"
            />
            <span>{carrinho}</span>
          </div>
        </div>
        <div className="menu">
          <ul className="menu-lista">
            <li>
              <a className="options" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="options" href="#produtos">
                Produtos
              </a>
            </li>
            <li>
              <a className="options" href="#categorias">
                Categorias
              </a>
            </li>
            <li>
              <a className="options" href="#meus-pedidos">
                Meus Pedidos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
