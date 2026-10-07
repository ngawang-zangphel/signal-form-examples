import { Component, signal } from '@angular/core';
import { SimpleForm } from './simple-form/simple-form';
@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  imports: [SimpleForm]
})
export class App {
  protected readonly title = signal('signal-form');
}
