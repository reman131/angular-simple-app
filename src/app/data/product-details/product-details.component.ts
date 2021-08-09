import { Component, OnChanges, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnChanges {
  @Input() product!: Product;
  productDetails: string[][] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.productDetails = this.product ? Object.entries(this.product) : undefined;
  }
}
