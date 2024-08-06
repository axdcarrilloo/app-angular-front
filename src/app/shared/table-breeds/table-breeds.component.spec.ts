import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBreedsComponent } from './table-breeds.component';

describe('TableBreedsComponent', () => {
  let component: TableBreedsComponent;
  let fixture: ComponentFixture<TableBreedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableBreedsComponent]
    });
    fixture = TestBed.createComponent(TableBreedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
