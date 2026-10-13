import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConditionActionHeader } from './condition-action-header';

describe('ConditionActionHeader', () => {
  let component: ConditionActionHeader;
  let fixture: ComponentFixture<ConditionActionHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionActionHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(ConditionActionHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
