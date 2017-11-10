import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginreactiveFormComponent } from './loginreactive-form.component';

describe('LoginreactiveFormComponent', () => {
  let component: LoginreactiveFormComponent;
  let fixture: ComponentFixture<LoginreactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginreactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginreactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
