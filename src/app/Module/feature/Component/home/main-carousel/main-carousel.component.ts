import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { homeCarouselData } from '../../../../../../Data/MainCarousel';



@Component({
  selector: 'app-main-carousel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.css']
})

export class MainCarouselComponent implements OnInit, OnDestroy 
{
  currentSlide: number = 0;
  intervalId: any;
  carouselData: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.carouselData = homeCarouselData;

    if (isPlatformBrowser(this.platformId)) {
      this.autoPlay();
    }
  }

  autoPlay() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

   nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  
}
