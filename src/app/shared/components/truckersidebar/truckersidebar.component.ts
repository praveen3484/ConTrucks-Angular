import { Component } from '@angular/core';

@Component({
    selector: 'app-truckersidebar',
    templateUrl: './truckersidebar.component.html',
    styleUrls: ['./truckersidebar.component.scss']
})
export class TruckersidebarComponent {
    isActive = false;
    showMenu = '';
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
