import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConditionBtn } from './condition-btn';

describe('ConditionBtn', () => {
  let component: ConditionBtn;
  let fixture: ComponentFixture<ConditionBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionBtn],
    }).compileComponents();

    fixture = TestBed.createComponent(ConditionBtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
