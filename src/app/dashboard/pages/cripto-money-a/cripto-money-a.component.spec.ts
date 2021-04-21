import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriptoMoneyAComponent } from './cripto-money-a.component';

describe('CriptoMoneyAComponent', () => {
  let component: CriptoMoneyAComponent;
  let fixture: ComponentFixture<CriptoMoneyAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriptoMoneyAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriptoMoneyAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
