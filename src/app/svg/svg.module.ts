import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SvgPageRoutingModule } from './svg-routing.module';

import { SvgPage } from './svg.page';
import {InlineSVGModule} from "ng-inline-svg-2";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SvgPageRoutingModule,
        InlineSVGModule,
        HttpClientModule
    ],
  declarations: [SvgPage]
})
export class SvgPageModule {}
