import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  constructor(private router:Router){}

  @Input() product:any

  navigate(){
    this.router.navigate([`/product-detailsPage/product.id`])
  }
}
