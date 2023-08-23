import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreMaCollectionComponent } from './titre-ma-collection.component';

describe('TitreMaCollectionComponent', () => {
  let component: TitreMaCollectionComponent;
  let fixture: ComponentFixture<TitreMaCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitreMaCollectionComponent]
    });
    fixture = TestBed.createComponent(TitreMaCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
