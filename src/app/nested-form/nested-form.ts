import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { FormGroup } from './form-group/form-group';
import { AndOrConditionEnum, RuleFormGroupType, RuleConditionType, RuleGroupType, ConditionActionHeaderBtnEnum } from './form.interface';
import { ConditionActionHeader } from './condition-action-header/condition-action-header';
import { ConditionForm } from './condition-form/condition-form';

@Component({
  imports: [JsonPipe, FormField, FormGroup, ConditionActionHeader, ConditionForm],
  selector: 'app-nested-form',
  styleUrl: './nested-form.scss',
  templateUrl: './nested-form.html',
})
export class NestedForm {

  andOrConditionEnum = signal(AndOrConditionEnum);

  ruleFormModel = signal<RuleFormGroupType>({
    name: '',
    description: '',
    rule: {
      condition: AndOrConditionEnum.OR,
      groups: [],
      rules: []
    }
  });

  ruleForm = form(this.ruleFormModel);

  actionBtnEnum = signal(ConditionActionHeaderBtnEnum);

  onConditionSelect(condition: AndOrConditionEnum): void {
    this.ruleFormModel.update(state => ({...state, rule: {...state.rule, condition: condition}}));
  }

  addNewRule(): void {
    this.ruleFormModel.update(state => ({...state, rule: {...state.rule, rules: [...state.rule.rules, this.newRule()]}}))
  };

  addNewSubGroup(): void {
    this.ruleFormModel.update(state => ({...state, rule: {...state.rule, groups: [...state.rule.groups, this.newGroup()]}}))
  }

  removeFormGroup(index: number): void {
    this.ruleFormModel.update(state => ({...state, rule: {...state.rule, groups: state.rule.groups.filter((_, i) => i !== index)}}));
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
