import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockMaCollectionComponent } from './block-ma-collection.component';

describe('BlockMaCollectionComponent', () => {
  let component: BlockMaCollectionComponent;
  let fixture: ComponentFixture<BlockMaCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockMaCollectionComponent]
    });
    fixture = TestBed.createComponent(BlockMaCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
