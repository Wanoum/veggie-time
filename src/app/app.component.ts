import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="wrapper">
      <app-navigation></app-navigation>
      <div class="section-content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: []
})
export class AppComponent {
  title = 'veggie-time';
}
