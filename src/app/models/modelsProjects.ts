export class Modelsprojects {

    nombreProyecto: string; 
    soporte: string; 
    coordinador: string; 
    estadoProyecto: string; 
    codSector: string; 
    direccion: string; 
    observacion: string; 
    codTipo: string; 

    

    constructor(nombreProyecto: any, soporte: any, coordinador: any, estadoProyecto: any, codSector: any,  direccion: any, observacion: any, codTipo:any){
  
        this.nombreProyecto = nombreProyecto
        this.soporte = soporte
        this.coordinador = coordinador
        this.estadoProyecto = estadoProyecto
        this.codSector = codSector
        this.direccion = direccion
        this.observacion = observacion
        this.codTipo = codTipo
    }
}

