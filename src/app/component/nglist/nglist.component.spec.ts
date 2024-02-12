import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NglistComponent } from './nglist.component';

describe('NglistComponent', () => {
  let component: NglistComponent;
  let fixture: ComponentFixture<NglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NglistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
