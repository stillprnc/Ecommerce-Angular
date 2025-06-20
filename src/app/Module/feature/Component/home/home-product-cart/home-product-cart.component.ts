import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-product-cart',
  standalone: true,
  imports: [],
  templateUrl: './home-product-cart.component.html',
  styleUrl: './home-product-cart.component.css'
})
export class HomeProductCartComponent {
  @Input() product:any  
}
