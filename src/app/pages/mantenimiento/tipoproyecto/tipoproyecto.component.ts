  import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
  import { ModelsTipoProyecto } from 'src/app/models/modelTipoProyecto';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tipoproyecto',
  templateUrl: './tipoproyecto.component.html',
  styleUrls: ['./tipoproyecto.component.scss']
})
export class TipoproyectoComponent implements OnInit {
  
  @Input() typetable:string = '';


  tproyectos:ModelsTipoProyecto[] = [];
  
  destipoProyecto = new FormControl('', [Validators.required]); 
  
  formProyecto = this.fb.group({
    destipoProyecto: this.destipoProyecto
  }); 
  


  constructor(private fb: FormBuilder,
    private router: Router,
    private readonly ps: ApiService
    ) { }



  ngOnInit(): void {
    
    this.cargarTP();

 
  }

  cargarTP(){
    
    this.ps.getTipoProyecto().subscribe((response: any)=>{
      this.tproyectos = response.data;
      
    })
  }

  
  deleteTipoProyecto(data: any){
    
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
 
        this.ps.deleteTipoProyecto(data).subscribe((rest:any) =>{
          if(rest){
            Swal.fire(
              'Eliminado',
              'El registro ha sido eliminado.',
              'success'
            )
            this.router.navigate(['/mantenimiento']);
            this.cargarTP(); 
          }else{
            alert("Error al eliminar")
          }

        })
      }
    })
  }

    

  _insert(data:any){


    this.ps.insertTP(data).subscribe((rest:any) =>{
      //console.log(rest);
      
      if(rest){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El tipo de proyecto ha sido creado',
          showConfirmButton: false,
          timer: 1700
        })
 
 
        setTimeout(()=>{   
          this.router.navigate(['/mantenimiento'])
          .then(() => {
          window.location.reload();
        });
      }, 1100);
      
        //this.router.navigate(['home']);
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
