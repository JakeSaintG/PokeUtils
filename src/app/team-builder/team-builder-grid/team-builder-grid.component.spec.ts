import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBuilderGridComponent } from './team-builder-grid.component';

describe('TeamBuilderGridComponent', () => {
  let component: TeamBuilderGridComponent;
  let fixture: ComponentFixture<TeamBuilderGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBuilderGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBuilderGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
