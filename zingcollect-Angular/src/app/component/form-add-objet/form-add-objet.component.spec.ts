import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddObjetComponent } from './form-add-objet.component';

describe('FormAddObjetComponent', () => {
  let component: FormAddObjetComponent;
  let fixture: ComponentFixture<FormAddObjetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAddObjetComponent]
    });
    fixture = TestBed.createComponent(FormAddObjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
