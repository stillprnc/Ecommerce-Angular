import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioButton } from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import { ProductReviewCardComponent } from './product-review-card/product-review-card.component';
import { mensPantsPage1 } from '../../../../../Data/pants/men_page1';
import { ProductCardComponent } from '../../../shared/Component/product-card/product-card.component';
import { StarRatingComponent } from '../../../shared/Component/star-rating/star-rating.component';

@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [CommonModule, FormsModule, MatRadioButton, MatRadioModule, StarRatingComponent, ProductReviewCardComponent, ProductCardComponent],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.css'
})
export class ProductDetailsPageComponent implements OnInit {
  selectedSizeAdmin:any
  reviews = [1, 1]
  relatedProcuts:any

  ngOnInit(): void {
    this.relatedProcuts = mensPantsPage1;
  }
  

  handleAddToCartAdmin(){
    
  }
}
