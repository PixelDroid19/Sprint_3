import { typesProducts } from "../types/types";
import { addDoc, collection, getDocs, deleteDoc, query, where, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const setData = product => {
    return{
    type: typesProducts.productClick,
    payload: product
}
}



//Eliminar
export const deleteProducts = (nombre) =>{
    return async(dispatch) =>{
        const estCollection = collection(db, 'Productos')
        const q = query(estCollection, where("nombre", "==", nombre ))


        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((docu) =>{
            console.log(docu.id)
            deleteDoc(doc(db,"Productos", docu.id))
            .then(res =>{
                dispatch(deleteSincronico(nombre))
            })
        })

    }
}

export const deleteSincronico = (nombre) =>{
  return{
    type: typesProducts.delete,
    payload: nombre
  }
}


//Registrar
export const registerEstudent = (descripcion,nombre,Precio,tel,img) => {
   return( dispatch) => {
       const newProducts = {
           descripcion,
           nombre,
           Precio,
           tel,
           img
       }
       addDoc(collection(db,"Productos"),newProducts)
       .then(resp => {
           dispatch(registerStudentSincrono(newProducts))
       })
       .catch(error => {
           console.log(error);
       })
   }
}

export const registerStudentSincrono = (estudiante) => {
    return{
        type: typesProducts.register,
        payload: estudiante
    }

}

//Lectura
export const listProducts = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "Productos"));
        const estudiante = [];
        querySnapshot.forEach((doc) => {
            estudiante.push({
                ...doc.data()
            })
        });
        dispatch(list(estudiante));
    }
}

export const list = (estudiantes) => {
    return {
        type: typesProducts.list,
        payload: estudiantes
    }
}