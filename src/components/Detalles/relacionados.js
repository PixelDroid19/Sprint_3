import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    CardActionArea,
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
  import { setData } from "../../actions/actionEstudent";
import { Link } from "react-router-dom";

const Relacionados = () => {
    const dispatch = useDispatch();

    const { products } = useSelector((store) => store.estudiante);
  console.log("detalles 2", products);

  const [showApi, setShowApi] = useState(false);

  useEffect(() => {
    products !== [] ? setShowApi(true) : setShowApi(false);
  }, [products]);

  const showProducts = products.map((element, index) => (
    <Card
      id={index}
      key={index}
      sx={{
        maxWidth: 250,
        minWidth: 250,
        padding: 1,
        maxHeight: 400,
        minHeight: 300,
        margin: 2,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          width="150"
          image={element.img}
          style={{objectFit: 'cover'}}
          alt="green"
        />
        <CardContent>
          
          <Typography gutterBottom variant="p" component="div" >
          <Link
                      className="setData"
                      to="/detalle"
                      onClick={() => dispatch(setData(element))}>
                      <strong> {element.nombre}</strong>
                    </Link>
          </Typography>

          

          <Typography variant="body2" color="text.secondary">
            <p style={{color: 'brown'}}>${element.Precio}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));

  return (
    <>
      <h5>Productos relacionados con este artículo</h5>
      <hr />
    <div className="BoxRelacionados">
      {showProducts}
    </div>
    </>
  );
};
export default Relacionados;
