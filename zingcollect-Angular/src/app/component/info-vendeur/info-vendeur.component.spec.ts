import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoVendeurComponent } from './info-vendeur.component';

describe('InfoVendeurComponent', () => {
  let component: InfoVendeurComponent;
  let fixture: ComponentFixture<InfoVendeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoVendeurComponent]
    });
    fixture = TestBed.createComponent(InfoVendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
