import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HomeProductCartComponent } from '../home-product-cart/home-product-cart.component';

@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [CommonModule, HomeProductCartComponent],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css'
})

export class ProductSliderComponent {
  @Input() title:any
  @Input() products:any
}
