import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardObjetComponent } from './card-objet.component';

describe('CardObjetComponent', () => {
  let component: CardObjetComponent;
  let fixture: ComponentFixture<CardObjetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardObjetComponent]
    });
    fixture = TestBed.createComponent(CardObjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
