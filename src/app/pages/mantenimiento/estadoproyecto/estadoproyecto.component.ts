import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelsEstado } from 'src/app/models/modelEstado';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-estadoproyecto',
  templateUrl: './estadoproyecto.component.html',
  styleUrls: ['./estadoproyecto.component.scss']
})
export class EstadoproyectoComponent implements OnInit {

  
  @Input() typetable:string = '';



  eproyectos:ModelsEstado[] = [];

  
  estadoProyecto = new FormControl('', [Validators.required]); 
  
  formProyecto = this.fb.group({
    estadoProyecto: this.estadoProyecto
  }); 
  


  constructor(private fb: FormBuilder,
    private router: Router,
    private readonly ps: ApiService
    ) { }


  ngOnInit(): void {
    
   this.cargarEstados();

 
  }

  cargarEstados(){

    this.ps.getEstado().subscribe((response: any)=>{
      this.eproyectos = response.data;
      
    })
  }

  
  deleteEstadoProyecto(data: any){
    
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
 
        this.ps.deleteEstadoProyecto(data).subscribe((rest:any) =>{
          if(rest){
            Swal.fire(
              'Eliminado',
              'El registro ha sido eliminado.',
              'success'
            )
            this.router.navigate(['/mantenimiento']);
            this.cargarEstados(); 
          }else{
            alert("Error al eliminar")
          }
        })
      }
    })
  }


  _insert(data:any){
    
    this.ps.insertEstado(data).subscribe((rest:any) =>{
      if(rest.codigo == "201"){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El Estado ha sido creado',
          showConfirmButton: false,
          timer: 1700
        })
        
        setTimeout(()=>{   
          this.router.navigate(['/mantenimiento'])
          .then(() => {
          window.location.reload();
        });
      }, 1700);
      }else{
        alert('rest.errormessage')
      }
    })
  }

  onsubmit(){
    if(this.formProyecto.valid){
      //console.log(this.formProyecto.value);
      
      this._insert(this.formProyecto.value);
      
    } else {
      Swal.fire('Formulario Inválido','revise los datos','warning')
    }
  }



}
