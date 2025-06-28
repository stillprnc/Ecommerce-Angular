import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { OrderCardComponent } from './order-card/order-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule, MatIconModule, OrderCardComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  constructor(private router:Router){}

  orderFilter=[
    {value:"on_the_way", label:"On The Way"},
    {value:"delivered", label:"Delivered"},
    {value:"cancelled", label:"Cancelled"},
    {value:"returned", label:"Returned"}
  ]

  orders=[[1,1]]

  navigateToOrderDetails=(id:Number)=>{
    this.router.navigate([`order/${id}`])
  }

}
