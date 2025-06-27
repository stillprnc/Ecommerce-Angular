import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [MatDividerModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  cartItemCount=1;
  updateNoOfCartItem(string:any){
    if(string=='-') this.cartItemCount -= 1;
    else this.cartItemCount += 1;

    if(this.cartItemCount==0)
    {

    }
  }

  removeCartItem(){

  }
}
