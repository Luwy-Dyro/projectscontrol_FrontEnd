import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuarios.model';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulta-usuario',
  templateUrl: './consulta-usuario.component.html',
  styleUrls: ['./consulta-usuario.component.scss']
})
export class ConsultaUsuarioComponent implements OnInit {

  //public usuarios: Usuario[] = [];
  public usuarios: any[] = [];
  
  constructor( private ar: ApiService,  private router: Router)  { }

  ngOnInit(): void {

    this.cargarUser()

  }

  cargarUser(){
    this.ar.getUsuario().subscribe((response: any)=>{
      //this.usuarios = response.data;
      this.usuarios = response;
      console.log("----", response);
      
    })
  }

  deleteUser(data: any){
    
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
 
        this.ar.deleteUser(data).subscribe((rest:any) =>{
          if(rest){
            Swal.fire(
              'Eliminado',
              'El registro ha sido eliminado.',
              'success'
            )
            this.router.navigate(['/mantenimiento']);
            this.cargarUser(); 
          }else{
            alert("Error al eliminar")
          }
        })
      }
    })
  }


}

