import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';

@Component({
    selector: 'app-leaverequest',
    templateUrl: './newjob.component.html',
    styleUrls: ['./newjob.component.scss'],
    animations: [routerTransition()]
})
    export class NewJobComponent implements OnInit {
      constructor() { }
     ngOnInit() { }
 }