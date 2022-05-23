import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: '',component: HomeComponent},
  // {path: 'home',component: HomeComponent},
  // {path: 'header',component: HeaderComponent},
  // {path: 'footer',component: FooterComponent},
  // {path: 'shop',component: ShopComponent}
  { path: 'admin', loadChildren: () => import('./Modules/admin/admin.module').then(m => m.AdminModule)},
  { path: 'user', loadChildren: () => import('./Modules/user/user.module').then(m => m.UserModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
