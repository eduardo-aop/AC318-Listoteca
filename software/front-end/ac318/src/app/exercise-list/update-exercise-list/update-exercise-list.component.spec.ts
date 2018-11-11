import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExerciseListComponent } from './update-exercise-list.component';

describe('UpdateExerciseListComponent', () => {
  let component: UpdateExerciseListComponent;
  let fixture: ComponentFixture<UpdateExerciseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateExerciseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExerciseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
