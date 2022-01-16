import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCollapseDetailsComponent } from './ngx-collapse-details.component';

describe('NgxCollapseDetailsComponent', () => {
  let component: NgxCollapseDetailsComponent;
  let fixture: ComponentFixture<NgxCollapseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCollapseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCollapseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
