import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourPageComponent } from './four-page.component';

describe('FourPageComponent', () => {
  let component: FourPageComponent;
  let fixture: ComponentFixture<FourPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourPageComponent]
    });
    fixture = TestBed.createComponent(FourPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
