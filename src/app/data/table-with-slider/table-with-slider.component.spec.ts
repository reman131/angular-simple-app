import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithSliderComponent } from './table-with-slider.component';

describe('TableWithSliderComponent', () => {
  let component: TableWithSliderComponent;
  let fixture: ComponentFixture<TableWithSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWithSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
