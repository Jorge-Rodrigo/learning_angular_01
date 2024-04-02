import { Component } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    example = "Bem Vindo"
    userA = { name: "Alex", email: "alex@email.com", job: "Instrutor de Programação"}
    userB = { name: "Osvaldo", email: "osvaldo@email.com", job: "Estudante"}
}
