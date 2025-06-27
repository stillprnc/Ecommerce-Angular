import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartItemComponent } from '../../../shared/Component/cart-item/cart-item.component';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartItemComponent, MatDividerModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor (private router:Router){

  }


  cart=[1, 1, 1]
  navigateToCheckout(){
    this.router.navigate(['checkout'])
  }
}
