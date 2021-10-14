import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CrudComponent } from './main/two/crud/crud.component';

const routes: Routes = [
    {path : 'curd', component:CrudComponent},
    {path : 'home', component:MainComponent},
    
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }