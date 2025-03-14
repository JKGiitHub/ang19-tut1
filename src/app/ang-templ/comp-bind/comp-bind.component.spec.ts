import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBindComponent } from './comp-bind.component';

describe('CompBindComponent', () => {
  let component: CompBindComponent;
  let fixture: ComponentFixture<CompBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompBindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
