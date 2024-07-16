import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user = {
    username: '',
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  register() {
    // this.authService.register(this.user).subscribe((response) => {
    //   console.log(response);
    // });
  }

}