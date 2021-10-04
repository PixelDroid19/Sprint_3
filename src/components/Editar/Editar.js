import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/actionLogin";
import { useForm } from "../../hooks/useForm";
import { fileUpload } from "../../helpers/FileUpload";
import { listProducts, EditarProducts } from "../../actions/actionEstudent";
import { useSelector } from "react-redux";
import { useState } from "react";

const Editar = ({ history }) => {
  const dispatch = useDispatch();
 

  const detalle = useSelector((state) => state.Datos);
  console.log("detalles", detalle);


  useEffect(() => {
     dispatch(listProducts());
  }, [])

  const [values, handleInputChange, reset] = useForm({
    descripcion: '',
    nombres: '',
    Precio: '',
    telefono: '',
    imagen: '',
  });

  let {
    descripcion,
    nombres,
    Precio,
    telefono,
    imagen,
  } = values;

  const handleRegistro = (e) => {
    const Antiguo = detalle.nombre
    e.preventDefault();
    dispatch(
        EditarProducts(
        Antiguo,
        descripcion,
        nombres,
        Precio,
        telefono,
        imagen
      ) 
    );
    reset();
  };


  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChanged = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((response) => {
        imagen = response;
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div >
      <form className="ProductoAdd" onSubmit={handleRegistro}>
        <h1>Productos</h1>
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="documento">Nombre del producto</label>
            <input
              className="form-control"
              type="text"
              name="nombres"
              id="nombres"
              value={nombres}
              placeholder={detalle.nombre}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group ">
            <label htmlFor="nombres">Descripción</label>
            <textarea 
              className="form-control"
              type="text"
              name="descripcion"
              id="descripcion"
              value={descripcion}
              placeholder={detalle.descripcion}
              rows="5" cols="20"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group ">
            <label htmlFor="apellidos">Precio</label>
            <input
              className="form-control"
              type="text"
              name="Precio"
              id="Precio"
              value={Precio}
              placeholder={detalle.Precio}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group ">
            <label htmlFor="telefono">Teléfono</label>
            <input
              className="form-control"
              type="text"
              name="telefono"
              id="telefono"
              value={telefono}
              placeholder={detalle.telefono}
              onChange={handleInputChange}
            />
          </div>

          <br />

          <div className="ButtonBox">
          <div className="form-group ">
            <input
              id="fileSelector"
              type="file"
              name="file"
              style={{ display: "none" }}
              onChange={handleFileChanged}
            />

            <button
              className="btn btn-success"
              onClick={handlePictureClick}
              type="button"
            >
              Imagen
            </button>
          </div>

          <div>
            <button className="btn btn-primary btnCustom" type="submit">
              Guardar
            </button>
          </div>
          
          </div>

        </div>
      </form>
      
    </div>
  );
};

export default Editar