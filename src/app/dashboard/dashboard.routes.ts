import { Routes } from '@angular/router';
import { CriptoMoneyAComponent } from './pages/cripto-money-a/cripto-money-a.component';

// components
import { WalletComponent } from './pages/wallet/wallet.component';





export const dashboardRoutes: Routes = [

 { path: '', component: WalletComponent },
 { path: 'wallet', component: WalletComponent },
 { path: 'moneyA', component:CriptoMoneyAComponent  },

];
