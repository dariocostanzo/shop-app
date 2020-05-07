import PRODUCTS from '../../data/dummy-data';
import { DELETE_PRODUCT } from '../action/products';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

export default (state = initialState, action) => {
  //add action to listen
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        // copy the existing state
        ...state,
        // filter from userProducts and return a new array that is created by running a function
        // on every item in the old array, and if that function returns true, we keep that item,
        // if it returns false we drop the item.
        userProducts: state.userProducts.filter(
          // this executes a function where we get the product, and it passes in the items
          // it's currently having a look at to this function.
          // So we get the product for each product in our user products array and we want to
          // return product.id unlike action.pid which is the product ID we want to delete.
          product => product.id !== action.pid
        ),
        availableProducts: state.availableProducts.filter(
          product => product.id !== action.pid
        )
      };
  }
  return state;
};
