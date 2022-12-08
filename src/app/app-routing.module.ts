import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';
import { RouterModule, Routes } from '@angular/router';
import { NofoundComponent } from './nofound/nofound.component';


const routes: Routes = [
  
  { path: '**', component: NofoundComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule, 
    AuthRoutingModule
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
