import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckdashComponent } from "./truckdash.component";
import { TruckdashRoutingModule } from "./truckdash-routing.module";

@NgModule({
  imports: [
    CommonModule,
    TruckdashRoutingModule,
   ],
  declarations: [TruckdashComponent]
})
export class TruckdashModule { }
