import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'classes', loadChildren: './class/classes/classes.module#ClassesModule' },
            { path: 'conpersonalprofile' , loadChildren: './conpersonalprofile/conpersonalprofile.module#ConpersonalprofileModule' },
            { path: 'conpublicprofile' , loadChildren: './conpublicprofile/conpublicprofile.module#ConpublicprofileModule' },
            { path: 'conrecentfullfilledjobposts' , loadChildren: './conrecentfullfilledjobposts/conrecentfullfilledjobposts.module#ConrecentfullfilledjobpostsModule' },
            { path: 'conrecentjobposts' , loadChildren: './conrecentjobposts/conrecentjobposts.module#ConrecentjobpostsModule' },
            { path: 'conjobpost' , loadChildren: './conjobpost/conjobpost.module#ConjobpostModule' },
            { path: 'newjob' , loadChildren: './newjob/newjob.module#NewJobModule' },
            { path: 'conjobpost' , loadChildren: './conjobpost/conjobpost.module#ConjobpostModule' },
            { path: 'newjobpost' , loadChildren: './newjobpost/newjobpost.module#NewjobpostModule' },
            { path: 'seecurrentjobs' , loadChildren: './seecurrentjobs/seecurrentjobs.module#SeecurrentjobsModule' },
            { path: 'conrecentjobposts' , loadChildren: './conrecentjobposts/conrecentjobposts.module#ConrecentjobpostsModule' },
            { path: 'conrecentfullfilledjobposts' , loadChildren: './conrecentfullfilledjobposts/conrecentfullfilledjobposts.module#ConrecentfullfilledjobpostsModule' },
            { path: 'conpersonalprofile' , loadChildren: './conpersonalprofile/conpersonalprofile.module#ConpersonalprofileModule' },
            { path: 'conpublicprofile' , loadChildren: './conpublicprofile/conpublicprofile.module#ConpublicprofileModule' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
