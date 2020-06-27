import React from "react";
import LandingCard from "../landingCard/LandingCard";
import Fade from "react-reveal/Fade";
import { Container } from 'reactstrap';

import "./aromatizacion.scss";

const Aromatizacion = () => {
  const items = [
    {
      title: "Difusores de bambu",
      imgUrl: "/assets/img/difusores_de_bambu.jpg",
      text:
        "Las formulaciones exclusivas de Le Parfum permiten obtener un producto de alta difusividad y excelente  performance.",
    },
    {
      title: "Aromatización Textil",
      imgUrl: "/assets/img/aromatizacion_textil2.jpg",
      text:
        "Esencias especialmente desarrolladas para esta aplicación, formuladas con ingredientes que mejoran la fijacion del producto a la tela.",
    },
    {
      title: "Aromatización en aerosol",
      imgUrl: "./assets/img/aromatizacion_aerosol2.jpg",
      text:
        "Productos pensados para lograr un adecuado sprayado ajustados en densidades y viscosidades.",
    },
  ];
  return (
    <Fade>    
      <Container>
      <div className="aromatizacion section">
        <h2 className="title">Aromatización</h2>
        <div className="cards__container">
          {items.map((item) => (
            <LandingCard
              key={item.title}
              title={item.title}
              content={item.text}
              imgUrl={item.imgUrl}
            />
          ))}
        </div>
      </div>
      </Container>
    </Fade>
  );
};

export default Aromatizacion;
