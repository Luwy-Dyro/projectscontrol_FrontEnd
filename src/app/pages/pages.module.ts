import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ConsultasComponent } from './proyectos/consultas/consultas.component';
import { RegistroComponent } from './proyectos/registro/registro.component';
import { ConsultaComponent } from './entregable/consulta/consulta.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { NavbarLateralComponent } from './navbar/navbar-lateral/navbar-lateral.component';
import { PagesComponent } from './pages.component';
import { RegistroEntregableComponent } from './entregable/registro-entregable/registro-entregable.component';
import { PermisosComponent } from './permisos/permisos.component';
import { RegistroUsuarioComponent } from './usuarios/registro-usuario/registro-usuario.component';
import { ConsultaUsuarioComponent } from './usuarios/consulta-usuario/consulta-usuario.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HttpClientModule } from "@angular/common/http";
import { ApiService } from '../services/api.service';
import { DetalleprojectComponent } from './proyectos/detalleproject/detalleproject.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { RegistrarComponent } from './permisos/registrar/registrar.component';
import { TipoproyectoComponent } from './mantenimiento/tipoproyecto/tipoproyecto.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EstadoproyectoComponent } from './mantenimiento/estadoproyecto/estadoproyecto.component';
import { SectorComponent } from './mantenimiento/sector/sector.component';
import { EditarprojectComponent } from './proyectos/editarproject/editarproject.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    ConsultasComponent,
    RegistroComponent,
    ConsultaComponent,
    HomeComponent,
    NavbarComponent,
    NavbarLateralComponent,
    PagesComponent,
    RegistroEntregableComponent,
    PermisosComponent,
    RegistroUsuarioComponent,
    ConsultaUsuarioComponent,
    MantenimientoComponent,
    DetalleprojectComponent,
    RegistrarComponent,
    TipoproyectoComponent,
    EstadoproyectoComponent,
    SectorComponent,
    EditarprojectComponent
    

  ],
  exports:[
    ConsultasComponent,
    RegistroComponent,
    ConsultaComponent,
    HomeComponent,
    NavbarComponent,
    NavbarLateralComponent,
    PagesComponent,
    RegistroEntregableComponent,
    PermisosComponent,
    RegistroUsuarioComponent,
    ConsultaUsuarioComponent,
    MantenimientoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    MatSelectModule,
    MatFormFieldModule,
    NgSelectModule
    
  ],
  providers:[
    ApiService
  ]
})
export class PagesModule { }
