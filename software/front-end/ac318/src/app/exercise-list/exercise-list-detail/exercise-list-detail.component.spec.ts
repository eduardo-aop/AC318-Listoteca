import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseListDetailComponent } from './exercise-list-detail.component';

describe('ExerciseListDetailComponent', () => {
  let component: ExerciseListDetailComponent;
  let fixture: ComponentFixture<ExerciseListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
