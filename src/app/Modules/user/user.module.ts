import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FooterComponent } from './Comporent/footer/footer.component';
import { HeaderComponent } from './Comporent/header/header.component';
import { HomeComponent } from './Comporent/home/home.component';
import { ShopComponent } from './Comporent/shop/shop.component';
import { UserInterfaceComponent } from './Comporent/user-interface/user-interface.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ShopComponent,
    UserInterfaceComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
