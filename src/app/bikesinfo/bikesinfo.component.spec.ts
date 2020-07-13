import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesinfoComponent } from './bikesinfo.component';

describe('BikesinfoComponent', () => {
  let component: BikesinfoComponent;
  let fixture: ComponentFixture<BikesinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikesinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
