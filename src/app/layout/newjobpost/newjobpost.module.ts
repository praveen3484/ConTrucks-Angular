import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewjobpostRoutingModule } from './newjobpost-routing.module';
import { NewjobpostComponent } from './newjobpost.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DatepickerModule } from 'angular2-material-datepicker'
 

@NgModule({
    imports: [
        CommonModule,
        NewjobpostRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DatepickerModule
    ],
    declarations: [NewjobpostComponent]
})
export class NewjobpostModule {
}
