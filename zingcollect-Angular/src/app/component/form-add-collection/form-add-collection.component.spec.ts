import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddCollectionComponent } from './form-add-collection.component';

describe('FormAddCollectionComponent', () => {
  let component: FormAddCollectionComponent;
  let fixture: ComponentFixture<FormAddCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAddCollectionComponent],
    });
    fixture = TestBed.createComponent(FormAddCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
