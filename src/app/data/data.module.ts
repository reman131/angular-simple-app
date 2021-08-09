import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { TableWithSliderComponent } from './table-with-slider/table-with-slider.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TableComponent,
    TableWithSliderComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports: [TableWithSliderComponent]
})
export class DataModule { }
