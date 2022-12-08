import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ConsultasComponent } from './proyectos/consultas/consultas.component';
import { RegistroComponent } from './proyectos/registro/registro.component';
import { ConsultaComponent } from './entregable/consulta/consulta.component';
import { RegistroEntregableComponent } from './entregable/registro-entregable/registro-entregable.component';
import { PermisosComponent } from './permisos/permisos.component';
import { ConsultaUsuarioComponent } from './usuarios/consulta-usuario/consulta-usuario.component';
import { RegistroUsuarioComponent } from './usuarios/registro-usuario/registro-usuario.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { DetalleprojectComponent } from './proyectos/detalleproject/detalleproject.component';
import { RegistrarComponent } from './permisos/registrar/registrar.component';
import { TipoproyectoComponent } from './mantenimiento/tipoproyecto/tipoproyecto.component';
import { EditarprojectComponent } from './proyectos/editarproject/editarproject.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        canActivate: [AuthGuard],
        
        children: [
          { path: 'home', component: HomeComponent },
          { path: 'proyecto-consultas', component: ConsultasComponent },
          { path: 'proyecto-registro', component: RegistroComponent},
          { path: 'proyecto/:id', component: DetalleprojectComponent},
          { path: 'editar-proyecto/:id', component: EditarprojectComponent},

          { path: 'entregable-consulta', component: ConsultaComponent },
          { path: 'entregable-registro', component: RegistroEntregableComponent },
          { path: 'roles', component: PermisosComponent },
          { path: 'registrar-roles', component: RegistrarComponent },
          { path: 'usuario-consultas', component: ConsultaUsuarioComponent },
          { path: 'registro-usuario', component: RegistroUsuarioComponent },
          { path:'mantenimiento',component:MantenimientoComponent},
          
          
          { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]
      },

  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}

