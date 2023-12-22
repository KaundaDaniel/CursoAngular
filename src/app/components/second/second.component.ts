import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent implements OnInit {
  @Input() pais: string = '';
  @Input() animalNome: string = '';
  @Input() prof: string = '';
  @Input() infoPersonal!: { email: string; password: string };
  constructor() {}

  ngOnInit(): void {}
}
