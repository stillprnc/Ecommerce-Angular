import { Component, OnInit } from '@angular/core';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { menJeans } from '../../../../../Data/Men/men_jeans';
import { gounsPage1 } from '../../../../../Data/Gouns/gouns';
import { lehngacholiPage2 } from '../../../../../Data/Saree/lenghaCholiPage2';
import { mens_kurta } from '../../../../../Data/Men/men_kurta';
import { mensShoesPage1 } from '../../../../../Data/Shoes/shoes';
import { NavbarComponent } from '../../../shared/Component/navbar/navbar.component';
import { FooterComponent } from '../../../shared/Component/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,MainCarouselComponent,ProductSliderComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  menJeans:any
  womenGouns:any
  lehngaCholi:any
  mensKurta:any
  mensShoes:any

  ngOnInit(): void {
    this.menJeans=menJeans.slice(0,5);
    this.womenGouns=gounsPage1.slice(0,5);
    this.lehngaCholi=lehngacholiPage2.slice(0,5);
    this.mensKurta=mens_kurta.slice(0,5);
    this.mensShoes=mensShoesPage1.slice(0,5);
  }
}
