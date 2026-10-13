import { Component, signal } from '@angular/core';
import { SimpleForm } from './simple-form/simple-form';
import { ArrayForm } from './array-form/array-form';
import { NgClass } from '@angular/common';

enum TabIdEnum {
  SIMPLE = 'simple',
  ARRAY = 'array'
}

interface NavItem {
  id: TabIdEnum;
  label: string;
}

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  imports: [SimpleForm, ArrayForm, NgClass]
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
    }
  ]);

  readonly tabIdEnum = signal(TabIdEnum);

  protected selectTab = signal<NavItem>(this.navItems()[1]);
}
