import { types, typesProducts } from "../types/types";

const initialState = {
  Datos: [],
};

export const dataReducers = (state = initialState, action) => {
  switch (action.type) {

      case typesProducts.productClick:
      return  action.payload
      ;

    default:
      return state;
  }
};
