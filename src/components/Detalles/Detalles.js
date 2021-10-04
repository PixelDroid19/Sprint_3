import React from "react";
import { useSelector } from "react-redux";
import ReactImageMagnify from "react-image-magnify";
import Relacionados from "./relacionados";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setData} from "../../actions/actionEstudent";

const Detalles = () => {
  const dispatch = useDispatch();
  const detalle = useSelector((state) => state.Datos);
  console.log("detalles", detalle);

  const { img, Precio, nombre, descripcion } = detalle;

  return (
    <>
      <div className="perimeter">
        <div className="image">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: `${img}`,
                srcSet: img,
                sizes:
                  "(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw",
              },
              largeImage: {
                alt: "",
                src: `${img}`,
                width: 1200,
                height: 1800,
              },
              isHintEnabled: true,
            }}
          />
        </div>
        <div className="copy">
          <h2>{nombre}</h2>
          <hr />
          <p style={{ color: "brown", fontSize: "20px" }}>Precio: ${Precio}</p>
          <p>
            Hasta <b>18 meses sin intereses de ${Precio}.</b> Ver mensualidades
            Solicita tu tarjeta Amazon Recargable y obtén ${parseInt(Precio * 0.20)} de descuento en
            tu primera compra mayor a ${parseInt(Precio * 1.10)}
          </p>
          <hr />
          <h5>Acerca de este artículo</h5>
          <p className="App-intro">{descripcion}</p>
        </div>
        <Link
                      className="setData"
                      to="/editar"
                      onClick={() => dispatch(setData(detalle))}>
                      <strong>Editar</strong>
            </Link>
      </div>

      <Relacionados />
    </>
  );
};

export default Detalles;
