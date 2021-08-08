import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { TableWithSliderComponent } from './table-with-slider/table-with-slider.component';



@NgModule({
  declarations: [
    TableComponent,
    TableWithSliderComponent
  ],
  imports: [
    MaterialModule,
    HttpClientModule,
  ],
  exports: [TableWithSliderComponent]
})
export class DataModule { }
