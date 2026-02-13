import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-loading-spinner',
  imports: [RouterLink],
  templateUrl: './loading-spinner.html',
  styleUrl: './loading-spinner.scss'
})
export class LoadingSpinner {}
