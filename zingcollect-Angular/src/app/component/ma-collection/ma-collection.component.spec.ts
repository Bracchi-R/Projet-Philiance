import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaCollectionComponent } from './ma-collection.component';

describe('MaCollectionComponent', () => {
  let component: MaCollectionComponent;
  let fixture: ComponentFixture<MaCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaCollectionComponent]
    });
    fixture = TestBed.createComponent(MaCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
