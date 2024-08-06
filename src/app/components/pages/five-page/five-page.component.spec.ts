import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivePageComponent } from './five-page.component';

describe('FivePageComponent', () => {
  let component: FivePageComponent;
  let fixture: ComponentFixture<FivePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FivePageComponent]
    });
    fixture = TestBed.createComponent(FivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
