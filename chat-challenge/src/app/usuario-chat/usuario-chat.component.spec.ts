import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioChatComponent } from './usuario-chat.component';

describe('UsuarioChatComponent', () => {
  let component: UsuarioChatComponent;
  let fixture: ComponentFixture<UsuarioChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioChatComponent]
    });
    fixture = TestBed.createComponent(UsuarioChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
