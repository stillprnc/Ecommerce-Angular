import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { filters, singleFilter } from './filterData';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProductCardComponent } from '../../../../shared/Component/product-card/product-card.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { mensPantsPage1 } from '../../../../../../Data/pants/men_page1';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, CommonModule, FormsModule, MatRadioModule, MatCheckboxModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  filterData:any
  singleFilter:any
  mensPantsPage1:any

  constructor(private router: Router, private acitvatedRoute:ActivatedRoute){}

  ngOnInit()
  {
    this.filterData=filters;
    this.singleFilter=singleFilter;
    this.mensPantsPage1=mensPantsPage1;
  }

  handleMultipleSelectFilter(value:string, sectionId:string)
  {
    const queryParams = {...this.acitvatedRoute.snapshot.queryParams};
    // console.log('qurey param: ', queryParams);
    const filterValues = queryParams[sectionId]
    ? queryParams[sectionId].split(',')
    :[];

    const valueIndex = filterValues.indexOf(value);
    if(valueIndex!=-1){
      filterValues.splice(valueIndex, 1);
    }
    else{
      filterValues.push(value);
    }

    if(filterValues.length>0){
      queryParams[sectionId]=filterValues.join(",");
    }
    else{
      delete queryParams[sectionId];
    }
  
    this.router.navigate([],{queryParams});
  }

  handleSingleSelectFilter(value:string, sectionId:string)
  {
    const queryParams = {...this.acitvatedRoute.snapshot.queryParams};
    queryParams[sectionId]=value;
    this.router.navigate([], {queryParams});
  }
}
