import { Component, signal, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Slide {
  bg: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-image-slider',
  imports: [RouterLink],
  templateUrl: './image-slider.html',
  styleUrl: './image-slider.scss'
})
export class ImageSlider implements OnDestroy {
  current = signal(0);
  private autoPlay: ReturnType<typeof setInterval> | null = null;

  slides: Slide[] = [
    { bg: 'linear-gradient(135deg, #ff4444 0%, #cc0044 100%)', title: 'Angular 20', subtitle: 'The modern web framework' },
    { bg: 'linear-gradient(135deg, #4488ff 0%, #0044cc 100%)', title: 'TypeScript', subtitle: 'Type-safe JavaScript' },
    { bg: 'linear-gradient(135deg, #39ff14 0%, #00cc44 100%)', title: 'CSS3', subtitle: 'Styling the modern web' },
    { bg: 'linear-gradient(135deg, #ff00ff 0%, #9900cc 100%)', title: 'Animations', subtitle: 'Bring your UI to life' },
    { bg: 'linear-gradient(135deg, #ff6b35 0%, #cc3300 100%)', title: 'Portfolio', subtitle: 'Showcase your work' },
  ];

  constructor() { this.startAutoPlay(); }

  startAutoPlay() {
    this.autoPlay = setInterval(() => this.next(), 3500);
  }

  next() { this.current.update(c => (c + 1) % this.slides.length); }
  prev() { this.current.update(c => (c - 1 + this.slides.length) % this.slides.length); }
  goTo(i: number) { this.current.set(i); }

  ngOnDestroy() { if (this.autoPlay) clearInterval(this.autoPlay); }
}
