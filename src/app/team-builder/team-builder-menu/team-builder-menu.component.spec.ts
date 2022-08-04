import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBuilderMenuComponent } from './team-builder-menu.component';

describe('TeamBuilderMenuComponent', () => {
  let component: TeamBuilderMenuComponent;
  let fixture: ComponentFixture<TeamBuilderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBuilderMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBuilderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
