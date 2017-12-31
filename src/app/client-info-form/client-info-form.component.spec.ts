import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInfoFormComponent } from './client-info-form.component';

describe('ClientInfoFormComponent', () => {
  let component: ClientInfoFormComponent;
  let fixture: ComponentFixture<ClientInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
