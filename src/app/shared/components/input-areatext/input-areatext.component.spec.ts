import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAreatextComponent } from './input-areatext.component';

describe('InputAreatextComponent', () => {
  let component: InputAreatextComponent;
  let fixture: ComponentFixture<InputAreatextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAreatextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAreatextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
