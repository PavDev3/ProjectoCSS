import { Component, signal, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-countdown-timer',
  imports: [RouterLink, FormsModule, DecimalPipe],
  templateUrl: './countdown-timer.html',
  styleUrl: './countdown-timer.scss'
})
export class CountdownTimer implements OnDestroy {
  targetDate = '';
  days = signal(0);
  hours = signal(0);
  minutes = signal(0);
  seconds = signal(0);
  isRunning = signal(false);
  expired = signal(false);
  private interval: ReturnType<typeof setInterval> | null = null;

  start() {
    if (!this.targetDate) return;
    const target = new Date(this.targetDate).getTime();
    if (isNaN(target)) return;
    if (this.interval) clearInterval(this.interval);
    this.isRunning.set(true);
    this.expired.set(false);
    this.tick(target);
    this.interval = setInterval(() => this.tick(target), 1000);
  }

  private tick(target: number) {
    const diff = target - Date.now();
    if (diff <= 0) {
      this.days.set(0); this.hours.set(0); this.minutes.set(0); this.seconds.set(0);
      this.expired.set(true);
      if (this.interval) clearInterval(this.interval);
      return;
    }
    this.days.set(Math.floor(diff / 86400000));
    this.hours.set(Math.floor((diff % 86400000) / 3600000));
    this.minutes.set(Math.floor((diff % 3600000) / 60000));
    this.seconds.set(Math.floor((diff % 60000) / 1000));
  }

  reset() {
    if (this.interval) clearInterval(this.interval);
    this.isRunning.set(false);
    this.expired.set(false);
    this.days.set(0); this.hours.set(0); this.minutes.set(0); this.seconds.set(0);
    this.targetDate = '';
  }

  ngOnDestroy() { if (this.interval) clearInterval(this.interval); }
}
