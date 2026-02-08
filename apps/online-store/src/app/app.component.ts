import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'df-root',
  template: `<h1>Welcome online-store</h1>
    <router-outlet></router-outlet>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {}
