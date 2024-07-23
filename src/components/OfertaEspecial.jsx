import "./OfertaEspecial.css"
import tenis from '/tenis.png'
export default function OfertaEspecial() {
    return (
        <div className="container-oferta">
            <div className="img">
                <img src={tenis} alt="fundo" class="fundo" width="500px" />
            </div>
            <div className="txt">
                <h3 className="cor-oferta">Oferta especial</h3>
                <h1 style={{color: '#474747'}}>Air Jordan edição de colecionador</h1>
                <p className="conteudo-oferta">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                <a href="/ofertas">
                    <button className="button"> Ver oferta </button>
                </a>
            </div>
        </div>
    )
}