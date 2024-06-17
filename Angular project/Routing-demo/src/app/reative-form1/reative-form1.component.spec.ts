import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativeForm1Component } from './reative-form1.component';

describe('ReativeForm1Component', () => {
  let component: ReativeForm1Component;
  let fixture: ComponentFixture<ReativeForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReativeForm1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReativeForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
