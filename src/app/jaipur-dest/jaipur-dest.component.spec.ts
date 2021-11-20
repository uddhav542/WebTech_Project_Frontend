import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaipurDestComponent } from './jaipur-dest.component';

describe('JaipurDestComponent', () => {
  let component: JaipurDestComponent;
  let fixture: ComponentFixture<JaipurDestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JaipurDestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JaipurDestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
