import { Component } from '@angular/core';
import {HeroDetailComponent} from "./hero-detail.component";
import {Hero} from "./hero";
import {MagicService} from "./magic.service";
import {BattlegroundComponent} from "./battleground.component";
import {CampComponent} from "./camp.component";
import {CommonService} from "./common.service";



@Component({
    selector: 'demo-hero',
    template: `
        <div class="row">
            <div class="col-md-3">
                <h3>酒馆</h3>
                <ul class="list-unstyled">
                    <li *ngFor="let h of heroRepo">
                        <hero-detail [hero]="h" (recruit)="recruit($event)"></hero-detail>
                    </li>
                </ul>
            </div>
            <div class="col-md-3">
                <camp  [heros]="myHeros" (attack)="onAttack($event)"></camp>
            </div>
            <div class="col-md-6">
                <battleground #bat [heros]="fightingHeros" (back)="onBack($event)"></battleground>
            </div>
            <input type="number" [(ngModel)]="left"/>
            <input type="number" [(ngModel)]="right"/>
            <input type="number" [value]="left + right"/>
        </div>
    `,
    directives: [HeroDetailComponent, CampComponent, BattlegroundComponent],
    providers: [CommonService]
})
export class HeroComponent {

    constructor(commonService: CommonService){}

    left:number;
    right:number;
    //sum:number;

    ngOnInit(){
        //this.sum = this.left + this.right;
    }

    heroRepo = [
        new Hero("死神"),
        new Hero("半藏"),
        new Hero("猎空"),
        new Hero("堡垒"),
        new Hero("源氏"),
        new Hero("麦克雷"),
        new Hero("法老之鹰")
    ];

    myHeros: Hero[] = [];
    fightingHeros: Hero[] = [];

    //招募
    recruit(hero: Hero){
        this.heroRepo.splice(this.heroRepo.indexOf(hero), 1);
        this.myHeros.unshift(hero);
        hero.status = 1;
    }

    //出征
    onAttack(hero: Hero) {
        this.myHeros.splice(this.myHeros.indexOf(hero), 1);
        this.fightingHeros.push(hero);
        hero.status = 2;
    }

    //撤退
    onBack(hero: Hero) {
        this.fightingHeros.splice(this.fightingHeros.indexOf(hero), 1);
        this.myHeros.unshift(hero);
        hero.status = 1;
    }

    //死亡
    onDead(hero: Hero) {
        this.heroRepo.push(new Hero(hero.name, 1000));
        this.fightingHeros.splice(this.fightingHeros.indexOf(hero), 1);
    }
}
