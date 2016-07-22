import { Component } from '@angular/core';
@Component({
    selector: 'demo-binding',
    template: `
        <p>Hello {{name}}</p>
        <p [style.background]="background">background</p>
        <p><a [href]="href">baidu</a></p>
        <p><input type="text" [(ngModel)]="value" (input)="onInput($event)"/> current value : {{value}}</p>

    `
})
export class BindingComponent {
    private name:string = "world";
    private value:string = "100";
    private background:string = "#ddd";
    private href:string = "http://www.baidu.com";

    onInput(event){
        console.log(event);
    }
}
