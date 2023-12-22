import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  nome = 'Angola';
  animal = 'Vaca';
  profissao = 'Programdor';
  tipo = 'Culinaria';
  infoIsuario = {
    email: 'danyyda@gmail',
    password: '12345555',
  };
  title = 'curso';
}
