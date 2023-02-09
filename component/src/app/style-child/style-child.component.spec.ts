import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleChildComponent } from './style-child.component';

describe('StyleChildComponent', () => {
  let component: StyleChildComponent;
  let fixture: ComponentFixture<StyleChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
