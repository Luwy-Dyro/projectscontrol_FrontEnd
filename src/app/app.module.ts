import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesModule } from './pages/pages.module';


import { AuthModule } from './auth/auth.module';
import { NofoundComponent } from './nofound/nofound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({ 
  declarations: [
    AppComponent,
    NofoundComponent,
    

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
