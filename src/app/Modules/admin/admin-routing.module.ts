import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPromotionComponent } from './Comporent/add-promotion/add-promotion.component';
import { AdminInterfaceComponent } from './Comporent/admin-interface/admin-interface.component';
import { HomeComponent } from './Comporent/home/home.component';
import { PromotionComponent } from './Comporent/promotion/promotion.component';
import { SidebarComponent } from './Comporent/sidebar/sidebar.component';
import { UpdatePromotionComponent } from './Comporent/update-promotion/update-promotion.component';

const routes: Routes = [
  { path: '',
    component: AdminInterfaceComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'promotion', component: PromotionComponent},
      {path: 'addPromotion', component: AddPromotionComponent},
      {path: 'updatePromotion', component: UpdatePromotionComponent},
      {path: '', redirectTo: '/admin/home', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
