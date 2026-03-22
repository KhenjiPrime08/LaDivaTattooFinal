import { useParams } from "react-router-dom";
import { artistas } from "../data/artistas";
import Separador from "../components/Separador";
import GaleriaTatuajes from "../components/GaleriaTatuajes";

function Artista() {
  const { id } = useParams();

  const artista = artistas[id];

  if (!artista) {
    return (
      <section style={{ textAlign: "center", padding: "50px" }}>
        <h2>Artista no encontrado</h2>
      </section>
    );
  }

  return (
    <section>

      {/* HERO */}
      <div className="artista-hero">
        <img src={artista.portada} alt={artista.nombre} />
        <div>
          <h1>{artista.nombre}</h1>
          <h3>{artista.rol}</h3>
        </div>
      </div>

      <Separador />

      {/* DESCRIPCIÓN */}
      <div className="artista-texto">
        {artista.descripcion.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <Separador />

      {/* GALERÍA */}
      <GaleriaTatuajes images={artista.imagenes} />

    </section>
  );
}

export default Artista;