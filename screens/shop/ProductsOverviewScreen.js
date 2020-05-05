// Present a list of all the products we can order
import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

const ProductsOverviewScreen = props => {
  // takes a function which automatically receives the state and returns `state.products.availableProducts`
  // from combineReducer in App.js, and gets `availableProducts` from the reducer/product.js
  const products = useSelector(state => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => <Text> itemData.item.title</Text>}
    />
  );
};

//header title
ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products'
};

export default ProductsOverviewScreen;
