import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockMesCollectionsComponent } from './block-mes-collections.component';

describe('BlockMesCollectionsComponent', () => {
  let component: BlockMesCollectionsComponent;
  let fixture: ComponentFixture<BlockMesCollectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockMesCollectionsComponent]
    });
    fixture = TestBed.createComponent(BlockMesCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
