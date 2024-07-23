import './ColecaoDestaque.css'
import tenisBranco from '/tenis-certo.png'
import blusa from '/camisa.png'
import headphone from '/fone.png'
import blusaVermelha from '/blusa-vermelha.png'
import calça from '/calça.png'
import smallheadphone from '/smallheadphone.png'
import sneakers from '/sneakers.png'

export default function ColecaoDestaque() {
    return (
        <>
            <div className='box'>
            <div> 
                <h3 className='colecaodestaque'>Coleção em destaque</h3>
                <div className='container-destaque'>
                    <div className='banner-destaque'>

                        <div>
                            <div className='desconto-destaque'>
                                30% off
                            </div>
                            <h2>Novo drop</h2>
                            <h2>Supreme</h2>
                            <div className='botao-destaque'>
                                <h5>Comprar</h5>
                            </div>
                        </div>
                        <div>
                            <img src={blusa} class='img-destaque'/>
                        </div>
                    </div>
                    <div className='banner-destaque'>
                        <div>
                            <div className='desconto-destaque'>
                                30% off
                            </div>
                            <h2>Coleção</h2>
                            <h2>Adidas</h2>
                            <div className='botao-destaque'>
                                <h5>Comprar</h5>
                            </div>
                        </div>
                        <div >
                            <img src={tenisBranco} className='img-destaque'/>
                        </div>
                    </div>
                    <div className='banner-destaque'>
                        <div>
                            <div className='desconto-destaque'>
                                30% off
                            </div>
                            <h2>Novo</h2>
                            <h2>Beat Bass</h2>
                            <div className='botao-destaque'>
                                <h5>Comprar</h5>
                            </div>
                        </div>
                        <div>
                            <img src={headphone} className='img-destaque'/>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container-2'>
                <h4>Coleção em destaque</h4>
                <div className='colecao-destaque'>
                    <div className='icon'>
                        <img src={blusaVermelha} alt='Imagem 1'/>
                            <p>Camisetas</p>
                    </div>
                    <div className='icon'>
                        <img src={calça} alt='Imagem 2'/>
                            <p>Calças</p>
                    </div>
                    <div className='icon'>
                        <img src={calça} alt='Imagem 3'/>
                            <p>Bonés</p>
                    </div>
                    <div className='icon'>
                        <img src={smallheadphone} alt='Imagem 4'/>
                            <p>Headphones</p>
                    </div>
                    <div className='icon'>
                        <img src={sneakers} alt='Imagem 5'/>
                            <p>Tênis</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
