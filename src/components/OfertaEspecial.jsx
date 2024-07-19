import "./OfertaEspecial.css"
import chuchu from '/tenis.png'
export default function OfertaEspecial(){
    return (
        <div className="container-oferta">
        <div className="img">
            <img src={chuchu} alt="fundo" className="fundo" width="500px"/>
        </div>
        <div className="txt">
            <h3 className="corof">Oferta especial</h3>
            <h1>Air Jordan edição de colecionador</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam animi vitae autem, dolores quibusdam
                exercitationem sapiente doloribus maxime earum, quae quod reprehenderit.</p>
            <button className="button"> Ver oferta </button>
        </div>
    </div>
    )
}