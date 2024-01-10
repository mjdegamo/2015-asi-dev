import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatingFeatureComponent } from './eating-feature.component';

describe('EatingFeatureComponent', () => {
  let component: EatingFeatureComponent;
  let fixture: ComponentFixture<EatingFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EatingFeatureComponent]
    });
    fixture = TestBed.createComponent(EatingFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
