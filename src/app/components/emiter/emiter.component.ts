import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emiter',
  templateUrl: './emiter.component.html',
  styleUrls: ['./emiter.component.scss'],
})
export class EmiterComponent implements OnInit {
  numero: number = 0;
  constructor() {}

  ngOnInit(): void {}
  onChangeNumber() {
    this.numero = Math.floor(Math.random() * 20);
  }
}
