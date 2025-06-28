import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { NavContentComponent } from './nav-content/nav-content.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule, MatMenuModule, CommonModule, NavContentComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

  constructor (private router:Router){}

  currentSection:any
  isNavbarContentOpen:any

  openNavbarContent(section:any)
  {
    this.isNavbarContentOpen=true;
    this.currentSection=section;
  }

  closeNavbarContent()
  {
    this.isNavbarContentOpen=false;
  }
  
  @HostListener('document:click', [`$event`])
  onDocumentClick(event:MouseEvent)
  {
    const modalContainer = document.querySelector(".modal-container");
    const openButtons = document.querySelectorAll(".open-button")

    let clickInsideButton = false;
    openButtons.forEach((button:Element)=>{
      if(button.contains(event.target as Node)){
        clickInsideButton=true;
      }
    })

    if(modalContainer && !clickInsideButton && this.isNavbarContentOpen)
    {
      this.closeNavbarContent();
    }
  }

  navigatToCart(path:any)
  {

  }

  navigatTo(path:any){
    this.router.navigate([path])
  }
}
