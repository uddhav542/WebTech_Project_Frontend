import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadakhDestComponent } from './ladakh-dest.component';

describe('LadakhDestComponent', () => {
  let component: LadakhDestComponent;
  let fixture: ComponentFixture<LadakhDestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadakhDestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LadakhDestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
