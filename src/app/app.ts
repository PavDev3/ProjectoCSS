import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  template: `
    <app-navbar />
    <router-outlet />
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class App {}
