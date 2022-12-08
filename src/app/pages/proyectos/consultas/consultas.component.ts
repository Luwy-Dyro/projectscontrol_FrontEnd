
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modelsprojects } from 'src/app/models/modelsProjects';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

 
@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})


export class ConsultasComponent implements OnInit {

  projects: Modelsprojects[] = []
  firstProject: any;
  pag: number = 1
 

  constructor(public rest: ApiService,
    public router: Router
    ) { }

  ngOnInit(): void {

    this.getProjects();
    

  }

  getProjects(){

    this.rest.getProjects().subscribe((response: any) => {
      this.projects = response;
      //console.log(this.projects);
    })  
  }

  Search(){
    if(this.firstProject == ""){
      this.ngOnInit();
    }else{
      this.projects = this.projects.filter( rest=>{
          return rest.nombreProyecto.toLocaleLowerCase().match(this.firstProject.toLocaleLowerCase());
      })
    }
  }

  key:string = 'codproyecto';
  reverse: boolean = false;
  order(key: any){
    this.key = key;
    this.reverse = !this.reverse
  }


  deleteProject( data: any){



    Swal.fire({
      title: 'Estas seguro de eliminar?',
      text: "No podras revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
 
        this.rest.deleteProject(data).subscribe((rest:any) =>{
          if(rest){
            Swal.fire(
              'Eliminado',
              'El registro ha sido eliminado.',
              'success'
            )
            this.router.navigate(['proyecto-consultas']);
            // this.getProjects(); 
          }else{
            alert("Error al eliminar")
          }

        })
      }
    })



  }


}

