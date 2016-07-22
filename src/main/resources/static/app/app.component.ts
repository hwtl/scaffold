/**
 * Created by charles on 16/6/29.
 */
import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import { SE_DIRECTIVES } from 'ngdui/core';
import {HeaderComponent} from "../header/header.component";
import {NavigatorComponent} from "../navigator/navigator.component";
import {SwitchboardComponent} from "../swicthboard/switchboard.component";
import {ExtensionComponent} from "../extension/switchboard.component";
console.log(module);
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [SE_DIRECTIVES, HeaderComponent, NavigatorComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
}