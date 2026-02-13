import { Component, ElementRef, ViewChildren, QueryList, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-tilt',
  imports: [RouterLink],
  templateUrl: './card-tilt.html',
  styleUrl: './card-tilt.scss'
})
export class CardTilt implements AfterViewInit, OnDestroy {
  @ViewChildren('tiltCard') cards!: QueryList<ElementRef<HTMLDivElement>>;
  private cleanups: Array<() => void> = [];

  cards3d = [
    { title: 'Angular', subtitle: 'Web Framework', icon: '🅰️', color: '#dd0031' },
    { title: 'TypeScript', subtitle: 'Typed JS', icon: '🔷', color: '#3178c6' },
    { title: 'CSS Magic', subtitle: 'Animations', icon: '✨', color: '#cc6699' },
  ];

  ngAfterViewInit() {
    this.cards.forEach(cardRef => {
      const el = cardRef.nativeElement;
      const onMove = (e: MouseEvent) => this.tilt(el, e);
      const onLeave = () => this.reset(el);
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      this.cleanups.push(() => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      });
    });
  }

  private tilt(el: HTMLDivElement, e: MouseEvent) {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -12;
    const rotateY = ((x - cx) / cx) * 12;
    el.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    el.style.transition = 'transform 0.1s ease';

    const glow = el.querySelector('.card-glow') as HTMLElement;
    if (glow) {
      glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15), transparent 60%)`;
    }
  }

  private reset(el: HTMLDivElement) {
    el.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
    el.style.transition = 'transform 0.5s ease';
    const glow = el.querySelector('.card-glow') as HTMLElement;
    if (glow) glow.style.background = 'none';
  }

  ngOnDestroy() { this.cleanups.forEach(fn => fn()); }
}
