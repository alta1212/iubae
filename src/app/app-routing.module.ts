import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './heart/main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { GuardsService } from './guards/guards.service';
import { KhumphaibaeComponent } from './auth/khumphaibae/khumphaibae.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent 
    
  }
  , {
    path: 'khumphaibae',
    component: KhumphaibaeComponent 
    
  }
,
  {
    path: 'heart',
    
    children: [
      { path: 'main', component: MainComponent }
    ],
    
    canActivate:[GuardsService]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
