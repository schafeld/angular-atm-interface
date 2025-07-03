import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositNotes } from './deposit-notes';

describe('DepositNotes', () => {
  let component: DepositNotes;
  let fixture: ComponentFixture<DepositNotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositNotes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositNotes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
