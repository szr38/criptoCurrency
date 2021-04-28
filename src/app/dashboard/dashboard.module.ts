import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';

// components
import { GraphicComponent } from './components/graphic/graphic.component';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TableComponent } from './components/table/table.component';

// pages
import { CriptoMoneyAComponent } from './pages/cripto-money-a/cripto-money-a.component';
import { CriptoMoneyBComponent } from './pages/cripto-money-b/cripto-money-b.component';
import { WalletComponent } from './pages/wallet/wallet.component';





@NgModule({
  declarations: [
    DashboardComponent, 
    WalletComponent,
    SidebarComponent,
    HeaderDashboardComponent,
    CriptoMoneyAComponent,
    TableComponent,
    GraphicComponent,
    CriptoMoneyBComponent
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
