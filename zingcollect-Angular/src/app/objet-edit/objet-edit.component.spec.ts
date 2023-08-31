import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetEditComponent } from './objet-edit.component';

describe('ObjetEditComponent', () => {
  let component: ObjetEditComponent;
  let fixture: ComponentFixture<ObjetEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjetEditComponent]
    });
    fixture = TestBed.createComponent(ObjetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
