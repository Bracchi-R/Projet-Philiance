import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreLesCollectionsComponent } from './titre-les-collections.component';

describe('TitreLesCollectionsComponent', () => {
  let component: TitreLesCollectionsComponent;
  let fixture: ComponentFixture<TitreLesCollectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitreLesCollectionsComponent]
    });
    fixture = TestBed.createComponent(TitreLesCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
