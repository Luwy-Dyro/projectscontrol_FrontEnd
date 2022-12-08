import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelRoles } from 'src/app/models/modelRoles';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';


 
@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent implements OnInit {

  usuario = new FormControl('', [Validators.required]);
  contrasenia = new FormControl('', [Validators.required]);
  codRol = new FormControl('', [Validators.required]);
  nombreUsuario = new FormControl('', [Validators.required]); 
  estadoUsuario = "A" 

  formUsuarios = this.fb.group({
    usuario:  this.usuario,
    contrasenia: this.contrasenia,
    codRol: this.codRol,
    nombreUsuario: this.nombreUsuario,
    estadoUsuario : this.estadoUsuario
  });


  

  roles:ModelRoles[] = [];

  constructor(private fb: FormBuilder,
    private router: Router,
    private readonly ps: ApiService

    
  ) { }


  ngOnInit(): void {
    this.ps.getRoles().subscribe((response: any)=>{
      this.roles = response.data;
      //console.log(this.roles);
      
    })
  }

  
  _insert(data:any){
    // const token = sessionStorage.getItem('token');
    // const header = { Authorization: 'Bearer ' + token};
    //console.log(header);
    

    this.ps.insertUsuarios(data).subscribe((rest:any) =>{
      if(rest.codigo == "201"){
        Swal.fire('Nuevo Usuario','El usuario ha sido creado con éxito.','success')
        this.router.navigate(['usuario-consultas']);
      }else{
        alert('rest.errormessage')
      }
    })
  }


  onsubmit(){
    if(this.formUsuarios.valid){
      this.formUsuarios.value.codRol = parseInt(this.formUsuarios.value.codRol);
      //console.log(this.formUsuarios.value);
      this._insert(this.formUsuarios.value);
      
    } else {
      Swal.fire('Formulario Inválido','revise los datos','warning')
    }
  }

}






