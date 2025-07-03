import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Balance } from './balance/balance';
import { Withdrawal } from './withdrawal/withdrawal';
import { Deposit } from './deposit/deposit';
import { DepositCoins } from './deposit-coins/deposit-coins';
import { DepositNotes } from './deposit-notes/deposit-notes';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'balance', component: Balance },
  { path: 'withdraw', component: Withdrawal },
  { path: 'deposit', component: Deposit },
  { path: 'deposit-coins', component: DepositCoins },
  { path: 'deposit-notes', component: DepositNotes }
];
