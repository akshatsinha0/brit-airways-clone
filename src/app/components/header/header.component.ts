import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // Method to handle search functionality
  onSearch(): void {
    // Implement search functionality
    console.log('Search clicked');
  }

  // Method to handle login
  onLogin(): void {
    // Implement login functionality
    console.log('Login clicked');
  }
}
