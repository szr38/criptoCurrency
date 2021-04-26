import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';

// components
import { GraphicComponent } from './components/graphic/graphic.component';
import { GraphicAComponent } from './components/graphic-a/graphic-a.component';
import { GraphicBComponent } from './components/graphic-b/graphic-b.component';
import { GraphicCComponent } from './components/graphic-c/graphic-c.component';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TableComponent } from './components/table/table.component';

// pages
import { CriptoMoneyAComponent } from './pages/cripto-money-a/cripto-money-a.component';
import { WalletComponent } from './pages/wallet/wallet.component';





@NgModule({
  declarations: [
    DashboardComponent, 
    WalletComponent,
    SidebarComponent,
    HeaderDashboardComponent,
    CriptoMoneyAComponent,
    TableComponent,
    GraphicAComponent,
    GraphicBComponent,
    GraphicCComponent,
    GraphicComponent
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
