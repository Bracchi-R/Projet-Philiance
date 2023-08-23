import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreMesCollectionsComponent } from './titre-mes-collections.component';

describe('TitreMesCollectionsComponent', () => {
  let component: TitreMesCollectionsComponent;
  let fixture: ComponentFixture<TitreMesCollectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitreMesCollectionsComponent]
    });
    fixture = TestBed.createComponent(TitreMesCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
