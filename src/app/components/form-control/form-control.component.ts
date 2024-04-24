import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css'
})
export class FormControlComponent {
  name = new FormControl("");
  email = new FormControl("");
  message = new FormControl("");

  formSubmit(event: Event){
    event.preventDefault();
    console.log({
      name: this.name.value,
      email: this.email.value,
      message: this.message.value
    });

    this.name.setValue("");
    this.email.setValue("");
    this.message.setValue("");
  }
}
