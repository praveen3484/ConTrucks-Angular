import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthGuard } from './shared';
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { routes } from "./sample/pricing/app.router";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { DataserviceService } from "./dataservice.service";
import { AlertService } from "./services/alert.service";
import { AuthenticationService } from "./services/authentication.service";

export function HttpLoaderFactory(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-4/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
            CarouselModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routes,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
  ],
 providers: [AuthGuard, DataserviceService,AlertService,
        AuthenticationService,],
  bootstrap: [AppComponent
]
})
export class AppModule { }
