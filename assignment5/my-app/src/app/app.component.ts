import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registration ';

  displayname='';
  displayaddress='';
  displayemail='';
  the_password='';

  getValue(name:string, address:string, email:string, password:string)
  {
    this.displayname=name;
    this.displayaddress=address;
    this.displayemail=email;
    this.the_password=password;


    alert('Registration successful');

  }



  login(email: string, password: string) {
    // Example: Check if email and password match some stored credentials
    const validEmail = this.displayemail;
    const validPassword = this.the_password;
  
    if (email === validEmail && password === validPassword) {
      alert('Login successful');
      
    } else {
      alert('Login failed. Please check your credentials.');
    }
  }
}