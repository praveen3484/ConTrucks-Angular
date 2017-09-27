import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowitworksComponent } from "./howitworks.component";
import { HowitworksRoutingModule } from "./howitworks-routing.module";
@NgModule({
    imports: [
        CommonModule,
          HowitworksRoutingModule,
    ],
    declarations: [
        HowitworksComponent
    ]
})
export class HowitworksModule { }