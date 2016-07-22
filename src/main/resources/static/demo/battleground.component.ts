import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, IterableDiffers } from '@angular/core';
import {Hero, HeroStatus} from "./hero";
import {MagicService, magicServiceFactory} from "./magic.service";
import {HeroDetailComponent} from "./hero-detail.component";
@Component({
    selector: 'battleground',
    template: `
        <div class="row">
            <div class="col-md-6">
                <h3>野外</h3>
                <hero-detail *ngFor="let h of heros" [hero]="h" (back)="onBack($event)" (cure)="onCure($event)"></hero-detail>
            </div>
            <div class="col-md-6">
                <pre style="height: 300px;overflow: auto">
                    <div *ngFor="let log of logs" [innerHTML]="log"></div>
                </pre>
            </div>
        </div>
    `,
    directives: [HeroDetailComponent],
    providers: [{
        provide: MagicService, useFactory: magicServiceFactory(30)
    }]
})
export class BattlegroundComponent {

    @Input() heros:Hero[] = [];

    @Output('back') backEmitter:EventEmitter<Hero> = new EventEmitter<Hero>();//撤退

    //differ: any;
    logs = [];
    constructor(private magic: MagicService) {
    }

    onBack(hero: Hero){
        this.backEmitter.emit(hero);
    }

    //治疗
    onCure(hero: Hero){
        this.magic.cure(hero);
        this.log(`[${hero.name}]恢复了体力`, 1);
    }

    ngOnInit(){
        setInterval(()=>{
            this.heros.forEach((hero: Hero)=>{
                setTimeout(()=>{
                    let damage = Math.floor(Math.random()*100);
                    hero.blood = Math.max(0, hero.blood - damage);
                    this.log(`[${hero.name}]受到 [${damage}] 点伤害`, 0);
                    if(hero.blood === 0) {
                        this.backEmitter.emit(hero);
                        this.log(`[${hero.name}]已阵亡`, 2);
                    }
                }, Math.random()*500);
            });
        }, 500);
    }

    //@Output() dead:EventEmitter<Hero> = new EventEmitter<Hero>();

    //kill(){
    //    this.hero.blood = 0;
    //    this.hero.status = HeroStatus.DEAD;
    //    this.dead.emit(this.hero);
    //}
    private log(log:String, level?:number):void {
        let className;
        switch (level) {
            case 0: className = 'text-danger';break;
            case 1: className = 'text-success';break;
            case 2: className = 'text-muted';break;

        }
        let time = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
        this.logs.unshift(`<span class="${className}">${time}--${log}</span>`)
    }
}
