import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div class="app"><router-outlet></router-outlet></div>',
  styles: [`
    .app {
      text-align: center;
      width: 100%;
      height: 100%;
      background-color: #f5f5f5;
    }
  `]
})
export class AppComponent {}
