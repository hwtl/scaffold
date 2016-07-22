import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import {SwitchboardComponent} from "../swicthboard/switchboard.component";

@Component({
    moduleId: module.id,
    selector: 'se-navigator',
    templateUrl: 'navigator.component.html',
    styleUrls: ['navigator.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class NavigatorComponent {
    constructor() {
        console.log('init navigator...');
    }
}