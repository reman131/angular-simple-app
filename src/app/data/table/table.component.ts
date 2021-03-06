import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  products!: Product[];//= ELEMENT_DATA;
  @Output() notify = new EventEmitter();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  showProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = [...products]
    });
  }

  deleteProducts() {
    this.products = [];
    this.notify.emit();
  }
}
