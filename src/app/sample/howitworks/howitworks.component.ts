import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../router.animations";

@Component({
  selector: 'app-howitworks',
  templateUrl: './howitworks.component.html',
  styleUrls: ['./howitworks.component.css'],
  animations: [routerTransition()]
})
export class HowitworksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
