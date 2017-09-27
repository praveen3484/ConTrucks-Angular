import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { AddClassesComponent } from "./add-classes.component";
import { AddClassesRoutingModule } from "./add-classes-routing.module";


@NgModule({
    imports: [
        CommonModule,
        AddClassesRoutingModule
    ],
    declarations: [
        AddClassesComponent
    ]
})
export class AddClassesModule { }
