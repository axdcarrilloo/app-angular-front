import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePageComponent } from './one-page.component';

describe('OnePageComponent', () => {
  let component: OnePageComponent;
  let fixture: ComponentFixture<OnePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnePageComponent]
    });
    fixture = TestBed.createComponent(OnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
