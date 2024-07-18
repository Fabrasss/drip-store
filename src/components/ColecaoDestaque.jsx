import './ColecaoDestaque.css'
import tenisBranco from '/tenis-branco.png'
import blusa from '/blusa.png'
import headphone from '/headphone.png'
import blusaVermelha from '/blusa-vermelha.png'
import calça from '/calça.png'
import smallheadphone from '/smallheadphone.png'
import sneakers from '/sneakers.png'

export default function ColecaoDestaque() {
    return (
        <>
            <div>
                <h3>Coleção em destaque</h3>
                <div className="container-destaque">
                    <div className="banner-destaque">

                        <div>
                            <div className="desconto-destaque">
                                30% off
                            </div>
                            <h2>Novo drop supreme</h2>
                            <div className="botao-destaque">
                                <h5>Comprar</h5>
                            </div>
                        </div>
                        <div>
                            <img src={blusa} alt="" srcset="" class="img-destaque"/>
                        </div>
                    </div>
                    <div className="banner-destaque">
                        <div>
                            <div className="desconto-destaque">
                                30% off
                            </div>
                            <h2>Coleção Adidas</h2>
                            <div className="botao-destaque">
                                <h5>Comprar</h5>
                            </div>
                        </div>
                        <div >
                            <img src={tenisBranco} alt="" srcset="" class="img-destaque"/>
                        </div>
                    </div>
                    <div className="banner-destaque">
                        <div>
                            <div className="desconto-destaque">
                                30% off
                            </div>
                            <h2>Novo Beat Bass</h2>
                            <div className="botao-destaque">
                                <h5>Comprar</h5>
                            </div>
                        </div>
                        <div>
                            <img src={headphone} alt="" srcset=""  class="img-destaque"/>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container_2">
                <h4>Coleção em destaque</h4>
                <div className="colecao-destaque">
                    <div className="icon">
                        <img src={blusaVermelha} alt="Imagem 1"/>
                            <p>Camisetas</p>
                    </div>
                    <div className="icon">
                        <img src={calça} alt="Imagem 2"/>
                            <p>Calças</p>
                    </div>
                    <div className="icon">
                        <img src={calça} alt="Imagem 3"/>
                            <p>Bonés</p>
                    </div>
                    <div className="icon">
                        <img src={smallheadphone} alt="Imagem 4"/>
                            <p>Headphones</p>
                    </div>
                    <div className="icon">
                        <img src={sneakers} alt="Imagem 5"/>
                            <p>Tênis</p>
                    </div>
                </div>
            </div>
        </>
    )
}