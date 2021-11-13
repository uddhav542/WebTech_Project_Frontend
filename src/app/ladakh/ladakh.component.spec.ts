import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadakhComponent } from './ladakh.component';

describe('LadakhComponent', () => {
  let component: LadakhComponent;
  let fixture: ComponentFixture<LadakhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadakhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LadakhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
