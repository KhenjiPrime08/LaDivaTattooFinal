import { useContext, useState } from "react";
import otros from "../assets/images/otros/otros";
import Presentacion from "../components/Presentacion";
import Separador from "../components/Separador";
import GaleriaTatuajes from "../components/GaleriaTatuajes";
import datos from "../data/artistas";

function Iris_Gems() {

  const datosIris = datos["iris-gems"];

  return (
    <section>
      <Presentacion
        imagen={otros.lorenaPrincipal}
        titulo={"Iris Gems: Gemas Dentales de Alta Calidad"}
        texto={
          <article>
            <p>
              Iris Gems es la indicada en gemas dentales, gracias a ella los clientes encuentran la belleza y la confianza. Está comprometida a ofrecer soluciones personalizadas que no solo mejoran la apariencia de tu sonrisa, sino que también fortalecen tu bienestar oral.
            </p>
            <p>
              Especialista en la colocación de gemas dentales, Lorena transforma cada sonrisa en una expresión única de estilo y personalidad. Trabaja con precisión, delicadeza y materiales de alta calidad, asegurando un resultado estético, duradero y totalmente adaptado a cada cliente. Su objetivo es realzar la belleza natural de cada sonrisa con un toque elegante y distintivo.
            </p>
          </article>
        }
      />

      <Separador />

      <GaleriaTatuajes images={datosIris.imagenes} />

    </section>
  );
}

export default Iris_Gems;