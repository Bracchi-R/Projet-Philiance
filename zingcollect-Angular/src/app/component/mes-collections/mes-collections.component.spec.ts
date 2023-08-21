import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesCollectionsComponent } from './mes-collections.component';

describe('MesCollectionsComponent', () => {
  let component: MesCollectionsComponent;
  let fixture: ComponentFixture<MesCollectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesCollectionsComponent]
    });
    fixture = TestBed.createComponent(MesCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
