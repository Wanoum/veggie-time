import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = "Veggie Time";

  // Dropdown navbar not working otherwise
  isCollapsed = true;
  
  constructor() { }

  // Toggles the dropdown menu in responsive sizes
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {
  }
}
