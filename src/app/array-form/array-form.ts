import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { applyEach, form, FormField, hidden, minLength, required, validate } from '@angular/forms/signals';

interface ExperienceFormType {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  companyName: string;
  stillWorking: boolean;
};

interface ExperienceArrayFormType {
  experiences: ExperienceFormType[];
}

@Component({
  imports: [JsonPipe, FormField],
  selector: 'app-array-form',
  styleUrl: './array-form.scss',
  templateUrl: './array-form.html',
})
export class ArrayForm {

  experienceModel = signal<ExperienceArrayFormType>({
    experiences: []
  });

  experienceForm = form(this.experienceModel, (schema) => {

    applyEach(schema.experiences, (exp) => {
      const reqConfig = [{field: exp.name, message: 'Name is required'}, {field: exp.description, message: 'Description is required'}, {field: exp.startDate, messaage: 'Start Date is required'}, {field: exp.companyName, message: 'Company Name is required'}];
      reqConfig.forEach((config) => {
        required(config.field, { message: config.message })
      });
      minLength(exp.description, 2, { message: 'Description must be at least 15 characters long' });

      validate(exp.endDate, ({value, valueOf}) => {
        const startDateValue = new Date(valueOf(exp.startDate)).getTime();
        const endDateValue = new Date(value()).getTime();
        if (endDateValue < startDateValue) {
          return {
            kind: 'invalid_date',
            message: 'End date must be after start date'
          }
        };
        return null;
      });

      required(exp.endDate, {
        message: 'End Date is required',
        when: ({valueOf}) => !valueOf(exp.stillWorking)
      });

      hidden(exp.endDate, {
        when: ({valueOf}) => valueOf(exp.stillWorking)
      });

      validate(exp.startDate, ({value}) => {
        if (new Date(value()).getTime() > new Date().getTime()) {
          return {
            message: 'Start date cannot be in the future',
            kind: 'invalid_date',
          };
        }
        return null;
      })
    })

    minLength(schema.experiences, 1, {
      message: 'At least one experience is required'
    });
  });

  addNewExperience(): void {
    if (this.experienceModel().experiences.length && this.experienceForm().invalid()) return;
    this.experienceModel.update(form => ({experiences: [...form.experiences, {
      name: '',
      description: '',
      startDate: '',
      endDate: '',
      companyName: '',
      stillWorking: false
    }]}));
  };

  removeExperience(index: number): void {
    this.experienceModel.update(form => ({
      experiences: form.experiences.filter((_, i) => i !== index)
    }))
  }
}
