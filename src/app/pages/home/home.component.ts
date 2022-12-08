import { Component, OnInit } from '@angular/core';
import { Modelsaplicactivos } from 'src/app/models/modelsAplicativos';
import { Modelsprojects } from 'src/app/models/modelsProjects';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data2: number = 200;

  projects: Modelsprojects[] = [];
  aplicativos: Modelsaplicactivos[] = [];
  usuarios: any = [];
  

  constructor(public rest: ApiService) { }

  ngOnInit(): void {
    this.getCountProyecto();
    this.getCountEntregable();
    this.getCountUsuarios();
  }


  getCountProyecto(){
    this.rest.getProjects().subscribe((response: any) => {
      this.projects = response; 
      //console.log('Cantidad proyecto: ' + this.projects.length);
    })  
  }

  getCountEntregable(){
    this.rest.getAplicativos().subscribe((response: any) =>{
      this.aplicativos = response;
      //console.log('Cantidad entregable: ' + this.aplicativos.length);
    }) 
  }

  getCountUsuarios(){
    this.rest.getUsuario().subscribe((response: any) =>{
      this.usuarios = response;
      //console.log('Cantidad entregable: ' + this.usuarios.length);
    }) 
  }


}
