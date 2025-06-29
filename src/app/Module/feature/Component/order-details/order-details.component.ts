import { Component } from '@angular/core';
import { AddressCardComponent } from '../../../shared/Component/address-card/address-card.component';
import { OrderCardComponent } from '../order/order-card/order-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [AddressCardComponent, OrderCardComponent, CommonModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {
  Orders=[1,1,1]
}
