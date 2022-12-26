import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylecomponentComponent } from './stylecomponent.component';

describe('StylecomponentComponent', () => {
  let component: StylecomponentComponent;
  let fixture: ComponentFixture<StylecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
