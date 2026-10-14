import { Component, input, output, signal } from '@angular/core';
import { ConditionBtn } from '../condition-btn/condition-btn';
import { FieldTree, FormField } from '@angular/forms/signals';
import { AndOrConditionEnum, ConditionActionHeaderBtnEnum } from '../form.interface';

@Component({
  imports: [ConditionBtn, FormField],
  selector: 'app-condition-action-header',
  styleUrl: './condition-action-header.scss',
  templateUrl: './condition-action-header.html',
})
export class ConditionActionHeader {

  condition = input.required<FieldTree<AndOrConditionEnum>>();
  hiddenBtn = input<ConditionActionHeaderBtnEnum[]>([]);

  addNewRule = output<void>();
  addNewSubGroup = output<void>();
  remove = output<void>();

  actionBtnEnum = signal(ConditionActionHeaderBtnEnum);

}
