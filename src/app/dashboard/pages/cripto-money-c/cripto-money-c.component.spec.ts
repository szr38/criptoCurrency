import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriptoMoneyCComponent } from './cripto-money-c.component';

describe('CriptoMoneyCComponent', () => {
  let component: CriptoMoneyCComponent;
  let fixture: ComponentFixture<CriptoMoneyCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriptoMoneyCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriptoMoneyCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
