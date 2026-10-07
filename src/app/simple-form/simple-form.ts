import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

interface SimpleFormType {
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  imports: [JsonPipe, FormField],
  selector: 'app-simple-form',
  styleUrl: './simple-form.scss',
  templateUrl: './simple-form.html',
})
export class SimpleForm {
  protected readonly simpleFormModel = signal<SimpleFormType>({
    firstName: '',
    lastName: '',
    age: 0,
  });

  protected readonly simpleForm = form(this.simpleFormModel);
}
