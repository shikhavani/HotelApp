import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WesternComponent } from './western.component';

describe('WesternComponent', () => {
  let component: WesternComponent;
  let fixture: ComponentFixture<WesternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WesternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WesternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
