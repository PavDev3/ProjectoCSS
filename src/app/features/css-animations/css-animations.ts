import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentCard, CardItem } from '../../shared/component-card/component-card';

@Component({
  selector: 'app-css-animations',
  imports: [RouterLink, ComponentCard],
  templateUrl: './css-animations.html',
  styleUrl: './css-animations.scss'
})
export class CssAnimations {
  items: CardItem[] = [
    { title: 'Neon Text Glow', description: 'Animated neon text with cycling color shadows using pure CSS keyframes.', route: '/css-animations/neon-text', category: 'css', tags: ['keyframes', 'text-shadow'], icon: '✨' },
    { title: '3D Cube Animation', description: 'A rotating 3D cube built with CSS transform-style: preserve-3d.', route: '/css-animations/cube-3d', category: 'css', tags: ['3D', 'transform'], icon: '🎲' },
    { title: 'Card Hover Effect', description: 'Cards that scale and blur siblings using the modern CSS :has() selector.', route: '/css-animations/card-hover', category: 'css', tags: [':has()', 'scale', 'blur'], icon: '🃏' },
    { title: 'Gradient Text', description: 'Hover-triggered gradient text fill animation using background-clip technique.', route: '/css-animations/gradient-text', category: 'css', tags: ['gradient', 'background-clip'], icon: '🌈' },
    { title: 'Loading Spinner', description: 'Orbiting dots loading animation with staggered CSS animation delays.', route: '/css-animations/loading-spinner', category: 'css', tags: ['loader', 'animation-delay'], icon: '⚙️' },
    { title: 'Border Color Animation', description: 'Animated glowing gradient border on input focus using CSS keyframes.', route: '/css-animations/border-color', category: 'css', tags: ['border', 'gradient', 'focus'], icon: '🔲' },
    { title: 'Cards Scroll Animation', description: 'Horizontal scroll-snap cards with CSS view-timeline pop-in animation.', route: '/css-animations/cards-scroll', category: 'css', tags: ['scroll-snap', 'view-timeline'], icon: '📜' },
    { title: 'Skeleton Loading', description: 'Shimmer skeleton loading placeholders for content-loading states.', route: '/css-animations/skeleton-loading', category: 'css', tags: ['skeleton', 'shimmer'], icon: '💀' },
    { title: 'Zigzag Border', description: 'A card with animated zigzag/dashed border using CSS clip-path animation.', route: '/css-animations/zigzag-border', category: 'css', tags: ['clip-path', 'border'], icon: '⚡' },
  ];
}
