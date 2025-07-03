import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositCoins } from './deposit-coins';

describe('DepositCoins', () => {
  let component: DepositCoins;
  let fixture: ComponentFixture<DepositCoins>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositCoins]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositCoins);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
