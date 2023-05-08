import { CartItem } from './cart-item';

export class Cart {
  cartItems: CartItem[] = [];
  get totalPrice(): number {
    let totalPrice = 0;
    this.cartItems.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  }
}
