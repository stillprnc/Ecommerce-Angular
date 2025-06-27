import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddressCardComponent } from '../../../../shared/Component/address-card/address-card.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [CommonModule, AddressCardComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.css'
})
export class AddressFormComponent {
  addresses=[1, 1, 1]
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      streetAddress: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      zipCode: ["", Validators.required],
      mobile: ["", Validators.required],
    });
  } 


  handleCreateOrder(string:any){

  }

  handleSubmit(){
    const formValue = this.myForm.value;
    console.log(formValue)
  }
}
