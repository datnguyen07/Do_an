import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './Comporent/sidebar/sidebar.component';
import { HomeComponent } from './Comporent/home/home.component';
import { AdminInterfaceComponent } from './Comporent/admin-interface/admin-interface.component';
import { PromotionComponent } from './Comporent/promotion/promotion.component';
import { AddPromotionComponent } from './Comporent/add-promotion/add-promotion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { PromotionService } from './adminService/promotion.service';
import { AppComponent } from 'src/app/app.component';
import { UpdatePromotionComponent } from './Comporent/update-promotion/update-promotion.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HomeComponent,
    AdminInterfaceComponent,
    PromotionComponent,
    AddPromotionComponent,
    UpdatePromotionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule

  ],
  providers: [PromotionService],
  bootstrap: [AppComponent]
})
export class AdminModule { }
