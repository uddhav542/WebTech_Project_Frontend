import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndamanDestComponent } from './andaman-dest.component';

describe('AndamanDestComponent', () => {
  let component: AndamanDestComponent;
  let fixture: ComponentFixture<AndamanDestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndamanDestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndamanDestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
