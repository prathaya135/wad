import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true, // Standalone doesn't exist in @Component
  imports: [], // imports doesn't belong here
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Correct property name styleUrls
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  Number: number = 0;
  address: string = '';
  password: string = '';
  items: string[] = []; // Correct property name items

  addItem() {
    const newItem = `${this.name.trim()} ${this.Number} ${this.address.trim()} ${this.email.trim()} ${this.password.trim()}`;
    if (newItem !== '') { 
      this.items.push(newItem);
      console.log('Item added:', newItem);
      // Reset input values if needed
      this.name = '';
      this.email = '';
      this.Number = 0;
      this.address = '';
      this.password = '';
    }
  }
}
