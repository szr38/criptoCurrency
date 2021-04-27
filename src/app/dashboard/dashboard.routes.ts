import { Routes } from '@angular/router';

// components
import { WalletComponent } from './pages/wallet/wallet.component';
import { CriptoMoneyAComponent } from './pages/cripto-money-a/cripto-money-a.component';
import { CriptoMoneyBComponent } from './pages/cripto-money-b/cripto-money-b.component';





export const dashboardRoutes: Routes = [

 { path: '', redirectTo: 'wallet', pathMatch: 'full' },
 { path: 'wallet', component: WalletComponent },
 { path: 'moneyA', component:CriptoMoneyAComponent  },
 { path: 'moneyB', component:CriptoMoneyBComponent  },

];
