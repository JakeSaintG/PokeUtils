import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActiveModal } from '@healthcatalyst/cashmere';
import { AddTeamMemberModalComponent } from './add-team-member-modal.component';

describe('AddTeamMemberModalComponent', () => {
  let component: AddTeamMemberModalComponent;
  let fixture: ComponentFixture<AddTeamMemberModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTeamMemberModalComponent ],
      imports: [HttpClientTestingModule],
      providers: [ActiveModal],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeamMemberModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
