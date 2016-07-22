import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Hero, HeroStatus} from "./hero";
import {MagicService, magicServiceFactory} from "./magic.service";
import {HeroDetailComponent} from "./hero-detail.component";
@Component({
    selector: 'camp',
    template: `
        <div>
            <h3>营地</h3>
            <hero-detail *ngFor="let h of heros" [hero]="h" (attack)="onAttack($event)" (cure)="onCure($event)"></hero-detail>
        </div>
    `,
    directives: [HeroDetailComponent],
    providers: [{
        provide: MagicService, useFactory: magicServiceFactory(100)
    }]
})
export class CampComponent {
    @Input() heros:Hero[];

    @Output('attack') attackEmitter:EventEmitter<Hero> = new EventEmitter<Hero>();//撤退

    constructor(private magic: MagicService){}

    //出征
    onAttack(hero: Hero){
        this.attackEmitter.emit(hero);
    }

    //治疗
    onCure(hero: Hero){
        this.magic.cure(hero);
    }

    //@Output() dead:EventEmitter<Hero> = new EventEmitter<Hero>();

    //kill(){
    //    this.hero.blood = 0;
    //    this.hero.status = HeroStatus.DEAD;
    //    this.dead.emit(this.hero);
    //}
}
