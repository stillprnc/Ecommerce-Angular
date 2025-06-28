import { Component } from '@angular/core';
import { AddressCardComponent } from '../../../shared/Component/address-card/address-card.component';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from '../../../shared/Component/cart-item/cart-item.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [AddressCardComponent, CommonModule, CartItemComponent, MatDividerModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  products=[1,1]
}
