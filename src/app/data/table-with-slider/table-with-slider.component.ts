import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-table-with-slider',
  templateUrl: './table-with-slider.component.html',
  styleUrls: ['./table-with-slider.component.css']
})
export class TableWithSliderComponent implements OnInit {
  opened = false;
  clickedProduct!: Product;

  constructor() { }

  ngOnInit(): void {
  }

  sidNavToggle() {
    this.opened = !this.opened;
  }

  showClickedRow(row: any) {
    this.clickedProduct = row;
    console.log(JSON.stringify(row));
  }
}
