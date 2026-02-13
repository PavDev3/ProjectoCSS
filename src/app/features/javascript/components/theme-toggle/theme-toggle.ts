import { Component, signal, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  imports: [RouterLink],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss'
})
export class ThemeToggle implements OnInit {
  isDark = signal(true);

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('demo-theme');
      this.isDark.set(saved !== 'light');
    }
  }

  toggle() {
    this.isDark.update(d => !d);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('demo-theme', this.isDark() ? 'dark' : 'light');
    }
  }
}
