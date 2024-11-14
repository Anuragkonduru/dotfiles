import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './layouts/home/home.component';
import { authGuard } from './shared/auth/auth-guard.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cart', canActivate: [authGuard] },
  {
    path: 'product',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
];
