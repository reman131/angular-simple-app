import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Prodcut } from '../product';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  products!: Prodcut[];//= ELEMENT_DATA;

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
  }

}
