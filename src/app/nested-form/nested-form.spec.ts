import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NestedForm } from './nested-form';

describe('NestedForm', () => {
  let component: NestedForm;
  let fixture: ComponentFixture<NestedForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedForm],
    }).compileComponents();

    fixture = TestBed.createComponent(NestedForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
