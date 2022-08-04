import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCardModalComponent } from './generate-card-modal.component';

describe('GenerateCardModalComponent', () => {
  let component: GenerateCardModalComponent;
  let fixture: ComponentFixture<GenerateCardModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateCardModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
