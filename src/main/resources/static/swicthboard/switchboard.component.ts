/**
 * Created by charles on 16/6/29.
 */
import { Component } from '@angular/core';
@Component({
    selector: 'switchboard',
    template: `
        <h3>Switchboard</h3>
        <input [(ngModel)]="params"/>
        <code>{{params}}</code>
    `,
    styles: []
})
export class SwitchboardComponent {
    params:string = "asdasd";
}