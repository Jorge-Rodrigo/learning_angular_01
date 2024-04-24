import { Component } from '@angular/core';
import { FormControlComponent } from '../../components/form-control/form-control.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormControlComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
