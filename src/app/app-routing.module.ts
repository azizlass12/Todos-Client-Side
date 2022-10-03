import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent,children:[
    {path:'todos/lister',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
    {path:'todos/ajouter',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
    {path:'todos/modifier/:id',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},


    // {path:'todos/liste',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)}
  
    

    

  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
