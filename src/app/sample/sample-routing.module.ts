import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from "./sample.component";

const routes: Routes = [
    {
        path: '', component: SampleComponent,
        children: [
  
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'howitworks', loadChildren: './howitworks/howitworks.module#HowitworksModule' },
            { path: 'pricing', loadChildren: './pricing/pricing.module#PricingModule' }
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SampleRoutingModule { }
