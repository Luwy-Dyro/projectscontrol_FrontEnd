import { Component, Input, OnInit } from '@angular/core';
import { ModelSector } from 'src/app/models/modelSector';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss']
})
export class SectorComponent implements OnInit {


  @Input() typetable:string = '';



  sectores:ModelSector[] = [];



  nombreSector = new FormControl('', [Validators.required]); 
  
  formProyecto = this.fb.group({
    nombreSector: this.nombreSector
  }); 
  


  constructor(private fb: FormBuilder,
    private router: Router,
    private readonly ps: ApiService
    ) { }


  ngOnInit(): void {

    
  this.cargarSectores();

  }

  cargarSectores(){

    this.ps.getSector().subscribe((response: any)=>{
      this.sectores = response.data;
      //console.log(this.sectores);
      
    })

  }

  deleteSector(data: any){
    
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
 
        this.ps.deleteSector(data).subscribe((rest:any) =>{
          if(rest){
            Swal.fire(
              'Eliminado',
              'El registro ha sido eliminado.',
              'success'
            )
            this.router.navigate(['/mantenimiento']);
            this.cargarSectores(); 
          }else{
            alert("Error al eliminar")
          }
        })
      }
    })
  }


  
  _insert(data:any){


    this.ps.insertSector(data).subscribe((rest:any) =>{
      if(rest.codigo=="201"){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El Sector ha sido creado',
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
      console.log(this.formProyecto.value);
      
      this._insert(this.formProyecto.value);
      
    } else {
      Swal.fire('Formulario Inválido','revise los datos','warning')
    }
  }




}
