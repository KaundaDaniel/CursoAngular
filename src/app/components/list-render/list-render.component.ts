import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/Carro';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
  marcasCarros: Carro[] = [
    { marca: 'Toyota', modelo: 'Aires', ano: 1890 },
    { marca: 'Toyota', modelo: 'Tucson', ano: 1970 },
    { marca: 'Ford', modelo: 'Ranger', ano: 2005 },
    { marca: 'Mitsubishi', modelo: 'L200', ano: 2017 },
  ];
  carroDetails = '';
  constructor(private listService: ListService) {}

  ngOnInit(): void {}

  showModelo(carro: Carro) {
    this.carroDetails = `Marca: ${carro.marca} Modelo: ${carro.modelo}`;
  }
  removeCarro(carro: Carro) {
    console.log('Carro apagado');

    this.marcasCarros = this.listService.apaga(this.marcasCarros, carro);
  }
}
