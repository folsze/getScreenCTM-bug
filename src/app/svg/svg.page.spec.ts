import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SvgPage } from './svg.page';

describe('SvgPage', () => {
  let component: SvgPage;
  let fixture: ComponentFixture<SvgPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SvgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
