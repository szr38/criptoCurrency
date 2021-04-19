import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { DashboardComponent } from './dashboard.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';





@NgModule({
  declarations: [
    DashboardComponent, 
    WalletComponent,
    SidebarComponent,
    HeaderDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DashboardModule { }
