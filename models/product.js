import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';

// Model to define how a product should look like
class Product {
  // we receive as arguments in the constructors
  constructor(id, ownerId, title, imageUrl, description, price) {
    // and store them in properties
    this.id = id;
    this.ownerId = ownerId;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.price = price;
  }
}

export default Product;
