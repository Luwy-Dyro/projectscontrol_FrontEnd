import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.scss']
})
export class PermisosComponent implements OnInit {

   //roles:ModelRoles[] = [];
   roles:any[] = [];
  constructor( private ar: ApiService,
      private router: Router
    ) { }

  ngOnInit(): void {

    this.cargarRoles();
  }

  cargarRoles(){
    this.ar.getRoles().subscribe((response: any)=>{
      //this.roles = response.data;
      this.roles = response;
      //console.log(this.roles);
    })
  }
    


  deleteRol(data: any){
    
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
 
        this.ar.deleteRol(data).subscribe((rest:any) =>{
          if(rest){
            Swal.fire(
              'Eliminado',
              'El registro ha sido eliminado.',
              'success'
            )
            this.router.navigate(['roles']);
            this.cargarRoles(); 
          }else{
            alert("Error al eliminar")
          }

        })
      }
    })


  }


}


export interface ModelRoles {

  codRol: number; 
  desRol: string; 
  

}
