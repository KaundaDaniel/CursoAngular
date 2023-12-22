import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  name: string = 'Kaunda';
  age: number = 25;
  profisssoes: string = 'software develop';
  @Input() curso: string ='';

  animais = ['Cavalo', 'Cabrito', 'Egua'];
  carro = {
    name: 'Ford',
    year: 1980,
  }

  constructor() {}

  ngOnInit(): void {}
}
