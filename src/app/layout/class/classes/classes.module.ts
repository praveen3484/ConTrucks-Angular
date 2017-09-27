import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from "angular2-datatable";
import { DataFilterPipe } from "./data-filter.pipe";
import { ClassesComponent } from "./classes.component";
import { ClassesRoutingModule } from "./classes-routing.module";

@NgModule({
    imports: [
        CommonModule,
        ClassesRoutingModule,
        DataTableModule
    ],
    declarations: [
        ClassesComponent,DataFilterPipe
    ]
})
export class ClassesModule { }
