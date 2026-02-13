import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface CardItem {
  title: string;
  description: string;
  route: string;
  category: 'css' | 'js';
  tags: string[];
  icon: string;
}

@Component({
  selector: 'app-component-card',
  imports: [RouterLink],
  templateUrl: './component-card.html',
  styleUrl: './component-card.scss'
})
export class ComponentCard {
  @Input() item!: CardItem;
}
