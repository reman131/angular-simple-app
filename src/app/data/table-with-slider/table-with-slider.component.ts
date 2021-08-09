import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-with-slider',
  templateUrl: './table-with-slider.component.html',
  styleUrls: ['./table-with-slider.component.css']
})
export class TableWithSliderComponent implements OnInit {
  opened = false;
  constructor() { }

  ngOnInit(): void {
  }

  sidNavToggle() {
    this.opened = !this.opened;
  }

  showClickedRow(row: any) {
    console.log(JSON.stringify(row));
  }
}
