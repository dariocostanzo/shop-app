// identifier of the action
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const deleteProduct = productId => {
  // takes the `productId` and returns an action object
  return { type: DELETE_PRODUCT, pid: productId };
};
