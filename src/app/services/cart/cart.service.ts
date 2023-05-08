import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';
import { CartItem } from 'src/app/shared/models/cart-item';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(food: Food): void {
    let cartItem = this.cart.cartItems.find((item) => item.food.id === food.id);
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.cartItems.push(new CartItem(food));
  }

  removeFromCart(id: number): void {
    this.cart.cartItems = this.cart.cartItems.filter(
      (item) => item.food.id !== id
    );
  }

  changeQuantity(id: number, quantity: number): void {
    let cartItem = this.cart.cartItems.find((item) => item.food.id === id);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }
}
