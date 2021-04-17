import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { DashboardComponent } from './dashboard.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    DashboardComponent, 
    WalletComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DashboardModule { }
