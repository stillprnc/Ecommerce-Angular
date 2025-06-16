import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { filters, singleFilter } from './filterData';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { mensPantsPage1 } from '../../Data/pants/men_page1';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, CommonModule, FormsModule, MatRadioModule, MatCheckboxModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  filterData:any
  singleFilter:any
  mensPantsPage1:any

  ngOnInit()
  {
    this.filterData=filters;
    this.singleFilter=singleFilter;
    this.mensPantsPage1=mensPantsPage1;
  }
}
