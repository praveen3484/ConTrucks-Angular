import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../router.animations";

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
  animations: [routerTransition()]
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
