export enum ValueTypeEnum {
  STRING = 'string',
  NUMBER = 'number',
  BOOLEAN = 'boolean',
  ARRAY = 'array',
}

export enum FieldTypeEnum {
  TEXT = 'text',
  NUMBER = 'number',
  TOGGLE = 'toggle',
  DROPDOWN = 'dropdown',
  DATE = 'date',
  MULTI_SELECT = 'multi-select',
}

export enum AndOrConditionEnum {
    AND = 'and',
    OR = 'or',
}  

export enum OperatorEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  CONTAINS = 'contains',
  NOT_CONTAINS = 'not_contains',
  GREATER_THAN = 'greater_than',
  LESS_THAN = 'less_than',
  GREATER_THAN_OR_EQUALS = 'greater_than_or_equals',
  LESS_THAN_OR_EQUALS = 'less_than_or_equals',
}

export interface RuleConditionType {
  field: FieldTypeEnum | undefined;
  operator: OperatorEnum | undefined;
  valueType: ValueTypeEnum | undefined;
  value: string | undefined;
}

export interface RuleGroupType {
  groups: RuleGroupType[];
  rules: RuleConditionType[];
  condition: AndOrConditionEnum;
}

export interface RuleFormGroupType {
  name: string;
  description: string;
  rule: RuleGroupType;
}

export enum ConditionActionHeaderBtnEnum {
  ADD_RULE = 'add_rule',
  ADD_SUB_GROUP = 'add_sub_group',
  REMOVE_GROUP = 'remove_group',
}