import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.Home)
  },
  {
    path: 'css-animations',
    loadComponent: () => import('./features/css-animations/css-animations').then(m => m.CssAnimations)
  },
  {
    path: 'css-animations/neon-text',
    loadComponent: () => import('./features/css-animations/components/neon-text/neon-text').then(m => m.NeonText)
  },
  {
    path: 'css-animations/cube-3d',
    loadComponent: () => import('./features/css-animations/components/cube3d/cube3d').then(m => m.Cube3d)
  },
  {
    path: 'css-animations/card-hover',
    loadComponent: () => import('./features/css-animations/components/card-hover/card-hover').then(m => m.CardHover)
  },
  {
    path: 'css-animations/gradient-text',
    loadComponent: () => import('./features/css-animations/components/gradient-text/gradient-text').then(m => m.GradientText)
  },
  {
    path: 'css-animations/loading-spinner',
    loadComponent: () => import('./features/css-animations/components/loading-spinner/loading-spinner').then(m => m.LoadingSpinner)
  },
  {
    path: 'css-animations/border-color',
    loadComponent: () => import('./features/css-animations/components/border-color/border-color').then(m => m.BorderColor)
  },
  {
    path: 'css-animations/cards-scroll',
    loadComponent: () => import('./features/css-animations/components/cards-scroll/cards-scroll').then(m => m.CardsScroll)
  },
  {
    path: 'css-animations/skeleton-loading',
    loadComponent: () => import('./features/css-animations/components/skeleton-loading/skeleton-loading').then(m => m.SkeletonLoading)
  },
  {
    path: 'css-animations/zigzag-border',
    loadComponent: () => import('./features/css-animations/components/zigzag-border/zigzag-border').then(m => m.ZigzagBorder)
  },
  {
    path: 'javascript',
    loadComponent: () => import('./features/javascript/javascript').then(m => m.Javascript)
  },
  {
    path: 'javascript/todo-list',
    loadComponent: () => import('./features/javascript/components/todo-list/todo-list').then(m => m.TodoList)
  },
  {
    path: 'javascript/countdown-timer',
    loadComponent: () => import('./features/javascript/components/countdown-timer/countdown-timer').then(m => m.CountdownTimer)
  },
  {
    path: 'javascript/password-generator',
    loadComponent: () => import('./features/javascript/components/password-generator/password-generator').then(m => m.PasswordGenerator)
  },
  {
    path: 'javascript/image-slider',
    loadComponent: () => import('./features/javascript/components/image-slider/image-slider').then(m => m.ImageSlider)
  },
  {
    path: 'javascript/circular-progress',
    loadComponent: () => import('./features/javascript/components/circular-progress/circular-progress').then(m => m.CircularProgress)
  },
  {
    path: 'javascript/theme-toggle',
    loadComponent: () => import('./features/javascript/components/theme-toggle/theme-toggle').then(m => m.ThemeToggle)
  },
  {
    path: 'javascript/card-tilt',
    loadComponent: () => import('./features/javascript/components/card-tilt/card-tilt').then(m => m.CardTilt)
  },
  { path: '**', redirectTo: '' }
];
