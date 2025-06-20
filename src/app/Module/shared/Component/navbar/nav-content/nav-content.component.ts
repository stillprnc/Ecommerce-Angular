import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { navigatoin } from './nav-content';

@Component({
  selector: 'app-nav-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-content.component.html',
  styleUrl: './nav-content.component.css'
})
export class NavContentComponent implements OnInit {
  category:any
  @Input() selectedSection:any

  ngOnInit(): void {
    this.category=navigatoin;
  }
}
