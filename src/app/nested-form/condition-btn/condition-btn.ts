import { Component, input, model, output, signal } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { AndOrConditionEnum } from '../form.interface';

@Component({
  imports: [],
  selector: 'app-condition-btn',
  styleUrl: './condition-btn.scss',
  templateUrl: './condition-btn.html',
})
export class ConditionBtn implements FormValueControl<AndOrConditionEnum>{

  value = model<AndOrConditionEnum>(AndOrConditionEnum.OR);

  // conditonValue = input.required<AndOrConditionEnum>();

  // onConditionSelect = output<AndOrConditionEnum>();
  
  andOrConditionEnum = signal(AndOrConditionEnum);
}
