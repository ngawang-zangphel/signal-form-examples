import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { disabled, form, FormField, hidden, min, minLength, required } from '@angular/forms/signals';

interface SimpleFormType {
  firstName: string;
  lastName: string;
  age: number;
  hasExperience: boolean;
  numberOfYears: number;
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
    hasExperience: false,
    numberOfYears: 0
  });

  protected readonly simpleForm = form(this.simpleFormModel, s => {
    
    required(s.firstName, { message: 'First name is required' });
    minLength(s.firstName, 3, { message: 'First name must be at least 3 characters long' });

    required(s.age, { message: 'Age is required' });
    min(s.age, 18, { message: 'You must be at least 18 years old' });

    hidden(s.numberOfYears, {
      when: ({valueOf}) => !valueOf(s.hasExperience)
    });

    required(s.numberOfYears, {
      message: 'Number of years is required',
      when: ({valueOf}) => valueOf(s.hasExperience)
    });

    min(s.numberOfYears, 1, { message: 'You must have at least 1 year of experience' });

    disabled(s.hasExperience, {
      when: ({valueOf}) => valueOf(s.age) < 18
    });
  });
}
