import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Modelsaplicactivos } from 'src/app/models/modelsAplicativos';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})


export class ConsultaComponent implements OnInit {
  
  aplicativos: Modelsaplicactivos[] = []
  searchApp: any;
  pag: number = 1;

  constructor(public rest: ApiService,  private router: Router ) { }

  ngOnInit(): void {
    
   this.cargarApp()

  }
  cargarApp(){

    this.rest.getAplicativos().subscribe((response: any) =>{
      this.aplicativos = response;
    })
  }

  Search(){
    if(this.searchApp == ""){
      this.ngOnInit();
    }else{
      this.aplicativos = this.aplicativos.filter( rest => {
        return rest.nombreAplicativo.toLocaleLowerCase().match(this.searchApp.toLocaleLowerCase());
      })
    }
  }

  key:string = 'codaplicativo';
  reverse: boolean = false;
  order(key: any){
    this.key = key;
    this.reverse = !this.reverse
  }



   
  deleteApp(data: any){
    
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
 
        this.rest.deleteApp(data).subscribe((rest:any) =>{
          if(rest){
            Swal.fire(
              'Eliminado',
              'El registro ha sido eliminado.',
              'success'
            )
            //this.router.navigate(['/mantenimiento']);
            this.cargarApp()
          }else{
            alert("Error al eliminar")
          }
        })
      }
    })
  }



}
