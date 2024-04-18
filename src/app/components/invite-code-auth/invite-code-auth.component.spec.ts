import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteCodeAuthComponent } from './invite-code-auth.component';

describe('InviteCodeAuthComponent', () => {
  let component: InviteCodeAuthComponent;
  let fixture: ComponentFixture<InviteCodeAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteCodeAuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InviteCodeAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
