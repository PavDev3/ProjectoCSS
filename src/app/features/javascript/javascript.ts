import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentCard, CardItem } from '../../shared/component-card/component-card';

@Component({
  selector: 'app-javascript',
  imports: [RouterLink, ComponentCard],
  templateUrl: './javascript.html',
  styleUrl: './javascript.scss'
})
export class Javascript {
  items: CardItem[] = [
    { title: 'Todo List', description: 'Full-featured task manager with add, complete, delete and filter functionality.', route: '/javascript/todo-list', category: 'js', tags: ['CRUD', 'signals'], icon: '✅' },
    { title: 'Countdown Timer', description: 'Set a target date and watch the live countdown with days, hours, minutes.', route: '/javascript/countdown-timer', category: 'js', tags: ['timer', 'intervals'], icon: '⏱️' },
    { title: 'Password Generator', description: 'Generate strong random passwords with configurable length and character sets.', route: '/javascript/password-generator', category: 'js', tags: ['crypto', 'clipboard'], icon: '🔐' },
    { title: 'Image Slider', description: 'Auto-playing image carousel with manual navigation and dot indicators.', route: '/javascript/image-slider', category: 'js', tags: ['carousel', 'auto-play'], icon: '🖼️' },
    { title: 'Circular Progress', description: 'Animated SVG circular progress bar with configurable percentage and color.', route: '/javascript/circular-progress', category: 'js', tags: ['SVG', 'animation'], icon: '🔄' },
    { title: 'Theme Toggle', description: 'Smooth light/dark theme switcher with CSS variables and localStorage.', route: '/javascript/theme-toggle', category: 'js', tags: ['dark mode', 'localStorage'], icon: '🌓' },
    { title: '3D Card Tilt', description: 'Mouse-tracking 3D perspective tilt effect on cards with glow.', route: '/javascript/card-tilt', category: 'js', tags: ['3D', 'mouse-tracking'], icon: '🃏' },
  ];
}
