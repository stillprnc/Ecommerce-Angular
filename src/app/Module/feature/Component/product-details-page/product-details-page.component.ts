import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioButton } from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import { ProductReviewCardComponent } from './product-review-card/product-review-card.component';

@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [CommonModule, FormsModule, MatRadioButton, MatRadioModule, ProductReviewCardComponent],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.css'
})
export class ProductDetailsPageComponent {
  selectedSizeAdmin:any
  reviews = [1, 1, 1]

  handleAddToCartAdmin(){
    
  }
}
