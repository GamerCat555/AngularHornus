import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceImageComponent } from './price-image.component';

describe('PriceImageComponent', () => {
  let component: PriceImageComponent;
  let fixture: ComponentFixture<PriceImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
