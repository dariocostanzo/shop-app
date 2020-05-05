import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import { Platform } from 'react-native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverviewScreen: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTitleStyle: { fontFamily: 'open-sans-bold' },
      headerBackTitleStyle: { fontFamily: 'open-sans' },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
  }
);

export default createAppContainer(ProductsNavigator);
