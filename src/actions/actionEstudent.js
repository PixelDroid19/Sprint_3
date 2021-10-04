import { typesProducts } from "../types/types";
import {
  updateDoc,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  query,
  where,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const setData = (product) => {
  return {
    type: typesProducts.productClick,
    payload: product,
  };
};

//Eliminar
export const deleteProducts = (nombre) => {
  return async (dispatch) => {
    const estCollection = collection(db, "Productos");
    const q = query(estCollection, where("nombre", "==", nombre));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docu) => {
      console.log(docu.id);
      deleteDoc(doc(db, "Productos", docu.id)).then((res) => {
        dispatch(deleteSincronico(nombre));
      });
    });
  };
};

export const deleteSincronico = (nombre) => {
  return {
    type: typesProducts.delete,
    payload: nombre,
  };
};

//Registrar
export const registerEstudent = (descripcion, nombre, Precio, tel, img) => {
  return (dispatch) => {
    const newProducts = {
      descripcion,
      nombre,
      Precio,
      tel,
      img,
    };
    addDoc(collection(db, "Productos"), newProducts)
      .then((resp) => {
        dispatch(registerStudentSincrono(newProducts));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const registerStudentSincrono = (estudiante) => {
  return {
    type: typesProducts.register,
    payload: estudiante,
  };
};

//Editar
export const EditarProducts = (Antiguo,descripcion, nombre, Precio, tel, img)  => {
  return async (dispatch) => {
    const estCollection = collection(db, "Productos");
    const q = query(estCollection, where("nombre", "==", Antiguo));

    const querySnapshot = await getDocs(q);
    
    console.log(querySnapshot)
    querySnapshot.forEach( async (docu) => {
      console.log(docu.id);
      const docRef = await doc(db, "Productos", `${docu.id}`);
      console.log(docRef);

      const updateTimestamp = await updateDoc(docRef, {
        nombre: nombre,
        descripcion: descripcion,
        Precio: Precio,
        tel: tel,
        img: img,
      });


    });
    
  };
};

export const EditarSincrono = (estudiante) => {
  return {
    type: typesProducts.editar,
    payload: estudiante,
  };
};

//Lectura
export const listProducts = () => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "Productos"));
    const Productos = [];
    querySnapshot.forEach((doc) => {
      Productos.push({
        ...doc.data(),
      });
    });
    dispatch(list(Productos));
  };
};

export const list = (Productos) => {
  return {
    type: typesProducts.list,
    payload: Productos,
  };
};
