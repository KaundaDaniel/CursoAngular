import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss'],
})
export class DirectivasComponent implements OnInit {
  color = 'blue';
  font = 'Arial';
  size = 30;
  estilos = ['small-title', 'fonts'];
  urdeline='underline'

  constructor() {}

  ngOnInit(): void {}
}
