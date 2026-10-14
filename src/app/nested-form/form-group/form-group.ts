import { Component, input, output } from '@angular/core';
import { ConditionActionHeader } from '../condition-action-header/condition-action-header';
import { AndOrConditionEnum, RuleConditionType, RuleGroupType } from '../form.interface';
import { FieldTree } from '@angular/forms/signals';
import { ConditionForm } from '../condition-form/condition-form';

@Component({
  imports: [ConditionActionHeader, ConditionForm],
  selector: 'app-form-group',
  styleUrl: './form-group.scss',
  templateUrl: './form-group.html',
})
export class FormGroup {

  ruleGroup = input.required<FieldTree<RuleGroupType>>();

  removeCondition = output<void>();

  addNewRule(): void {
    this.ruleGroupForm().value.update(state => ({...state, rules: [...state.rules, this.newRule()]}));
  }
  
  addNewSubGroup(): void {
    this.ruleGroupForm().value.update(state => ({...state, groups: [...state.groups, this.newGroup()]}));
  }

  removeSubFormGroup(index: number): void {
    this.ruleGroupForm().value.update(state => ({...state, groups: state.groups.filter((_, i) => i !== index)}));
  }

  private get ruleGroupForm(): FieldTree<RuleGroupType> {
    return this.ruleGroup();
  }

  protected newRule(): RuleConditionType {
    return {
      field: undefined, 
      operator: undefined,
      valueType: undefined,
      value: undefined,
    }
  };

  protected newGroup(): RuleGroupType {
    return {
      groups: [],
      rules: [],
      condition: AndOrConditionEnum.OR,
    }
  }

}
