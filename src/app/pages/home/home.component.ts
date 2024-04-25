import { Component } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsComponent,CommonModule],
  providers: [UserService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  example = "Bem Vindo"
   
  constructor(private userService: UserService) {}

  getUserList(){
    return this.userService.userList
  }
}
