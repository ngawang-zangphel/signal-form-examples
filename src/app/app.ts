import { Component, signal } from '@angular/core';
import { SimpleForm } from './simple-form/simple-form';
import { ArrayForm } from './array-form/array-form';
import { NgClass } from '@angular/common';
import { NestedForm } from './nested-form/nested-form';

enum TabIdEnum {
  SIMPLE = 'simple',
  ARRAY = 'array',
  NESTED = 'nested'
}

interface NavItem {
  id: TabIdEnum;
  label: string;
}

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  imports: [SimpleForm, ArrayForm, NgClass, NestedForm]
})
export class App {
  protected readonly title = signal('signal-form');

  navItems = signal<NavItem[]>([
    {
      id: TabIdEnum.SIMPLE,
      label: 'Simple Form'
    },
    {
      id: TabIdEnum.ARRAY,
      label: 'Form Array'
    },
    {
      id: TabIdEnum.NESTED,
      label: 'Nested Form'
    }
  ]);

  readonly tabIdEnum = signal(TabIdEnum);

  protected selectTab = signal<NavItem>(this.navItems()[2]);
}
