import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './users/user/user.component';

const routes : Routes=[
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'users',component:UsersComponent},
  {
    path: 'users', component: UsersComponent
    children: {
      path:'/:id/:name/:job',conponent:UserComponent
    }
  },
  {path:'admin',component:AdminComponent},
  {path:'products',component:ProductsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    AdminComponent,
    ProductsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
