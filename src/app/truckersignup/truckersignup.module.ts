import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckersignupComponent } from './truckersignup.component';
import { TruckersignupRoutingModule } from "./truckersignup-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    TruckersignupRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TruckersignupComponent]
})
export class TruckersignupModule { }
