import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  pages: Page[];

  page: string;

  constructor() {}

  ngOnInit(): void {
    this.pages = [
      { name: 'Add item' },
      { name: 'Edit user' },
      { name: 'Sign In' },
      { name: 'Sign Up' },
      { name: 'Forgot password' },
      { name: '404 Page' },
    ];
  }
}

interface Page {
  name: string;
}
