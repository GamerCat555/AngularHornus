import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToutTubeSearchComponent } from './tout-tube-search.component';

describe('ToutTubeSearchComponent', () => {
  let component: ToutTubeSearchComponent;
  let fixture: ComponentFixture<ToutTubeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToutTubeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToutTubeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
