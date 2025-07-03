import { Routes } from '@angular/router';
import { Balance } from './balance/balance';
import { Withdrawal } from './withdrawal/withdrawal';
import { Deposit } from './deposit/deposit';

export const routes: Routes = [
  { path: 'balance', component: Balance },
  { path: 'withdraw', component: Withdrawal },
  { path: 'deposit', component: Deposit },
  { path: '', redirectTo: '/balance', pathMatch: 'full' }
];
