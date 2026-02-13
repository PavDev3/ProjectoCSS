import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circular-progress',
  imports: [RouterLink, FormsModule],
  templateUrl: './circular-progress.html',
  styleUrl: './circular-progress.scss'
})
export class CircularProgress {
  readonly radius = 70;
  readonly circumference = 2 * Math.PI * this.radius;

  skills = signal([
    { label: 'Angular',    value: 92, color: '#dd0031' },
    { label: 'TypeScript', value: 88, color: '#3178c6' },
    { label: 'CSS/SCSS',   value: 85, color: '#cc6699' },
    { label: 'JavaScript', value: 90, color: '#f7df1e' },
  ]);

  strokeDashoffset(value: number): number {
    return this.circumference - (value / 100) * this.circumference;
  }
}
