import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nouha',
  imports: [],
  templateUrl: './nouha.html',
  styleUrl: './nouha.css',
})
export default class Nouha {
  protected readonly title = signal('Portfolio_Nouha');
}
