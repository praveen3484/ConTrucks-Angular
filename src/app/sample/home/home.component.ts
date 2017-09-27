import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../router.animations";
import { CarouselConfig } from "ngx-bootstrap/carousel";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [{provide: CarouselConfig, useValue: {interval: 4500, noPause: true}}],
  animations: [routerTransition()]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
