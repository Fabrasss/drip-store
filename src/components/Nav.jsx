import logodigital from "/logo-digital-college.png"
import './Nav.css'
import iconecarrinho from '/icone-carrinho.png'
export default function Nav () {
    return (
        <div>
            <div className="nav">
                <div className="nav-1">
                    <div>
                        <img className="image-logo" src= {logodigital} alt="Logo da Digital College" />
                    </div>
                    <input id="search" type="text" placeholder="Pesquisar produto..." />
                    <div className="buttons">
                        <button className="register-button"><span className="text-button">Cadastre-se</span></button>
                        <button className="enter-button"><span className="text-button-2">Entrar</span></button>
                    </div>
                    <div className="icon-carrinho">
                        <img className="icone-carrinho" src= {iconecarrinho} alt="icone de carrinho" />
                    </div>
                </div>
                <div className="menu">
                    <ul className="menu-lista">
                        <li><a className="options" href=""></a>Home</li>
                        <li><a className="options" href=""></a>Produtos</li>
                        <li><a className="options" href=""></a>Categorias</li>
                        <li><a className="options" href=""></a>Meus Pedidos</li>
                    </ul>
                </div>
            </div>
        </div>    
    )
}