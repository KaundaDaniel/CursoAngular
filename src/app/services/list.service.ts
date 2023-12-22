import { Injectable } from '@angular/core';
import { Carro } from '../Carro';


@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}

  apaga(meusCarro: Carro[], carro: Carro) {
    console.log('Ativando o service');
    return meusCarro.filter((a)=> carro.modelo!=a.modelo)
  }
}
