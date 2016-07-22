import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'se-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {
    constructor(){
        console.log('init...');
    }
}