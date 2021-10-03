import { types, typesProducts } from "../types/types";

const initialState = {
  products: [],
};

export const estudentReducers = (state = initialState, action) => {
  switch (action.type) {
    case typesProducts.register:
      return {
        products: [action.payload]
      };

      case typesProducts.list:
      return{  
        products: [...action.payload]
      };

      case typesProducts.delete:
        return{  
          estudiante: state.products.filter( est => est.nombre !== action.payload)
        };

        case typesProducts.select:
        return{  
          estudiante: state.products.filter( est => est.nombre !== action.payload)
        };

    default:
      return state;
  }
};
