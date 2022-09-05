import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCollapseDetailsComponent } from './ngx-collapse-details.component';


describe(NgxCollapseDetailsComponent.name, () => {
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

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${NgxCollapseDetailsComponent.prototype.setHoverBgAndColor.name} Should mouseenter when bgHover`, () => {
    const mouseEvent = new MouseEvent('mouseenter');

    fixture.detectChanges();

    component.setHoverBgAndColor(mouseEvent);

    expect(component.bgHover).toEqual('#ffa500');
  });

  it(`#${NgxCollapseDetailsComponent.prototype.setHoverBgAndColor.name} Should mouseleave when bgHover`, () => {
    const mouseEvent = new MouseEvent('mouseleave');

    fixture.detectChanges();

    component.setHoverBgAndColor(mouseEvent);

    expect(component.bgHover).toEqual('#ffa500');
  });

  it(`#${NgxCollapseDetailsComponent.prototype.setHoverBgAndColor.name} Should mouseleave when bgHover`, () => {
    const mouseEvent = new MouseEvent('click');

    fixture.detectChanges();

    component.setHoverBgAndColor(mouseEvent);

    expect(component.bgHover).toEqual('#ffa500');
  });
});
