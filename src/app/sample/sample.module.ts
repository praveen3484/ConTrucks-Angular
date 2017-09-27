import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component';
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from "./home/home.component";
import { HowitworksComponent } from "./howitworks/howitworks.component";
import { PricingComponent } from "./pricing/pricing.component";
import {CarouselModule} from "ngx-bootstrap/carousel";

@NgModule({
    imports: [
        CommonModule,
        SampleRoutingModule,
        TranslateModule,
        CarouselModule.forRoot(),
       
    ],
    declarations: [
        SampleComponent,
       
    ]
})
export class SampleModule { }
