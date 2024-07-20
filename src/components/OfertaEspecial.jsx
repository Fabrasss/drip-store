import "./OfertaEspecial.css";
import tenis from "/tenis.png";
import tenisSemFundo from "/tenis-sem-fundo.png";

export default function OfertaEspecial() {
  return (
    <div className="container-oferta">
      <div
        // className="img"
        className="relative"
      >
        {/* <img src={tenis} alt="fundo" className="fundo" width="500px" /> */}
        <div className="w-[500px] h-[500px] border rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
          FUNDO
        </div>
        <div className="absolute top-0 left-0 w-full h-full pt-[100px]">
          <img
            src={tenisSemFundo}
            alt="fundo"
            // className="bg-red-500"
            width="500px"
          />
        </div>
      </div>
      <div className="txt">
        <h3 className="corof">Oferta especial</h3>
        <h1 style={{ color: "#474747" }}>Air Jordan edição de colecionador</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam animi
          vitae autem, dolores quibusdam exercitationem sapiente doloribus
          maxime earum, quae quod reprehenderit.
        </p>
        <a href="/ofertas">
          <button className="button"> Ver oferta </button>
        </a>
      </div>
    </div>
  );
}
