import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreCardObjetComponent } from './titre-card-objet.component';

describe('TitreCardObjetComponent', () => {
  let component: TitreCardObjetComponent;
  let fixture: ComponentFixture<TitreCardObjetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitreCardObjetComponent]
    });
    fixture = TestBed.createComponent(TitreCardObjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
