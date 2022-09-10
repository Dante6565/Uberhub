import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  
  private usuarios: Usuario [] = [
    {
      id  : '1',
      user: 'admin',
      pass: 'admin',
      tipo: 'admin',
    },
    {
      id  : '2',
      user: 'user',
      pass: 'user',
      tipo: 'admin',
    },
    {
      id  : '3',
      user: 'mazino',
      pass: 'mazino12345',
      tipo: 'cliente',
    },
    {
      id  : '4',
      user: 'conductor',
      pass: 'conductor',
      tipo: 'conductor',
    },
    {
      id  : '5',
      user: 'cliente',
      pass: 'cliente',
      tipo: 'cliente',
    },
    {
      id  : '6',
      user: 'elias',
      pass: 'elias',
      tipo: 'conductor',
    }


  ]

  obtenerUsuario (user: string , pass: string,) {
    return {
      ...this.usuarios.find(aux => {
        return aux.user === user && aux.pass === pass  
      })
    }
  }
}

