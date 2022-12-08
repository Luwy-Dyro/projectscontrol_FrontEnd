export interface _userRol {
    codRol: number,
    desRol: string
  }

export class Usuario{

    constructor (
        public codUsuario: number,
        public usuario: string,
        public nombreUsuario: string,
        public rol: _userRol

    ){}
  }