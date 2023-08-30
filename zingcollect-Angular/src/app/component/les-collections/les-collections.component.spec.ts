import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesCollectionsComponent } from './les-collections.component';

describe('LesCollectionsComponent', () => {
  let component: LesCollectionsComponent;
  let fixture: ComponentFixture<LesCollectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LesCollectionsComponent],
    });
    fixture = TestBed.createComponent(LesCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
