import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './Comporent/footer/footer.component';
import { HeaderComponent } from './Comporent/header/header.component';
import { HomeComponent } from './Comporent/home/home.component';
import { ShopComponent } from './Comporent/shop/shop.component';
import { UserInterfaceComponent } from './Comporent/user-interface/user-interface.component';

const routes: Routes = [
  { path: '',
    component: UserInterfaceComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'header', component: HeaderComponent},
      {path: 'footer', component: FooterComponent},
      {path: 'shop', component: ShopComponent},
      {path: '', redirectTo: '/user/home', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
