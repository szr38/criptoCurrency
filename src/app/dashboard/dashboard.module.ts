import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { DashboardComponent } from './dashboard.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';

import { ChartsModule } from 'ng2-charts';
import { CriptoMoneyAComponent } from './pages/cripto-money-a/cripto-money-a.component';





@NgModule({
  declarations: [
    DashboardComponent, 
    WalletComponent,
    SidebarComponent,
    HeaderDashboardComponent,
    CriptoMoneyAComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
