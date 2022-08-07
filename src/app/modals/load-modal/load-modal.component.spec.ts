import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActiveModal, ModalService } from '@healthcatalyst/cashmere';

import { LoadModalComponent } from './load-modal.component';

describe('LoadModalComponent', () => {
  let component: LoadModalComponent;
  let fixture: ComponentFixture<LoadModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ActiveModal],
      declarations: [ LoadModalComponent ],
      imports: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
