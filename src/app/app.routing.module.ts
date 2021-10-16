import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CrudComponent } from './main/two/crud/crud.component';
import { LoginComponent } from './main/two/login/login.component';

const routes: Routes = [
    {path : 'curd', component:CrudComponent},
    {path : 'home', component:MainComponent},
    {path : 'login', component:LoginComponent}
    
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }