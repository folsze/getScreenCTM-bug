import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-svg',
  templateUrl: './svg.page.html',
  styleUrls: ['./svg.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SvgPage implements AfterViewInit {
  private ctm: DOMMatrix;
  private mainWrapper: SVGGElement;

  constructor(
    public navCtrl: NavController
  ) {}

  ngAfterViewInit() {
    this.testItAll();
  }

  private testItAll() {
    const fValuesSet = new Set<number>();

    if (window.innerWidth !== 1000 || window.innerHeight !== 500) {
      throw new Error("Window dimensions are not 1000x500! Exiting calculation since value-checking if-statements dont make sense now.");
    }

    // NOTE: comment this in if you are using ng-inline-svg
    // NOTE: this doesn't work, need setTimeout... The next get only assigns to mainWrapper
    // this.mainWrapper = document.getElementById('main-wrapper') as unknown as SVGGElement;
    // if (this.mainWrapper) {
    //   this.ctm = this.mainWrapper.getScreenCTM()!;
    //   this.log('\nright away worked (it actually shouldn\'t...!');
    // }

    setTimeout(() => {
      this.mainWrapper = document.getElementById('main-wrapper') as unknown as SVGGElement;
      this.ctm = this.mainWrapper.getScreenCTM()!;
      this.log('-----------------------------------AFTER 0ms:');

      fValuesSet.add(this.ctm.f);
      if (this.ctm.f > 20) {
        throw new Error('This shouldn\'t happen! Why is the y-translation suddenly: ' + this.ctm.f);
      } else {
        console.log('no error occured');
      }
    }, 0);

    setTimeout(() => {
      this.mainWrapper = document.getElementById('main-wrapper') as unknown as SVGGElement;
      this.ctm = this.mainWrapper.getScreenCTM()!;
      this.log('-----------------------------------AFTER 1ms:');

      fValuesSet.add(this.ctm.f);
      if (this.ctm.f > 20) {
        throw new Error('This shouldn\'t happen! Why is the y-translation suddenly: ' + this.ctm.f);
      } else {
        console.log('no error occured');
      }
    }, 1);

    setTimeout(() => {
      this.ctm = this.mainWrapper.getScreenCTM()!;
      this.log('-----------------------------------AFTER 10ms:');

      fValuesSet.add(this.ctm.f);
      if (this.ctm.f > 20) {
        throw new Error('This shouldn\'t happen! Why is the y-translation suddenly: ' + this.ctm.f);
      } else {
        console.log('no error occured');
      }
    }, 10);

    setTimeout(() => {
      this.ctm = this.mainWrapper.getScreenCTM()!;
      this.log('-----------------------------------AFTER 100ms:');

      fValuesSet.add(this.ctm.f);
      if (this.ctm.f > 20) {
        throw new Error('This shouldn\'t happen! Why is the y-translation suddenly: ' + this.ctm.f);
      } else {
        console.log('no error occured');
      }
      console.error('All different .f values, why are they not all the same?', [...fValuesSet]);
    }, 100);

  }

  public onSvgLoaded = (svg: SVGElement): SVGElement => {
    this.testItAll();
    return svg;
  }

  calcAndLog() {
    this.ctm = this.mainWrapper.getScreenCTM()!;
  }

  log(msg?: string) {
    console.log(msg);
    console.log('Scale', this.ctm.a, this.ctm.d);
    console.log('Translate', this.ctm.e, this.ctm.f);
    console.log('Skew', this.ctm.b, this.ctm.c);
  }

  goBack() {
    this.navCtrl.back();
  }
}
