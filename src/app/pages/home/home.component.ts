import { Component } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    example = "Bem Vindo"
    userList = [
      { name: 'Alex', email: 'alex@email.com', job: 'Instrutor de Programação' },
      { name: 'Osvaldo', email: 'osvaldo@email.com', job: 'Estudante' },
      {
        name: 'Maria',
        email: 'maria@email.com',
        job: 'Desenvolvedora Front-end',
      },
    ];
}
