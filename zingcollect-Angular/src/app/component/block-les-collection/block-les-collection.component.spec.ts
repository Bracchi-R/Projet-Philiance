import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockLesCollectionComponent } from './block-les-collection.component';

describe('BlockLesCollectionComponent', () => {
  let component: BlockLesCollectionComponent;
  let fixture: ComponentFixture<BlockLesCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockLesCollectionComponent]
    });
    fixture = TestBed.createComponent(BlockLesCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
