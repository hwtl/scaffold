import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Hero, HeroStatus} from "./hero";
import {MagicService} from "./magic.service";
@Component({
    selector: 'hero-detail',
    template: `
        <div style="margin: 5px 0;">
            <span [style.text-decoration]="hero.blood==0?'line-through':'none'" style="width: 120px;display: inline-block;">{{hero.name}}  {{hero.blood}}HP</span>
            <button (click)="recruit($event)" *ngIf="hero.status==0" class="btn btn-sm btn-default">招募</button>
            <button (click)="attack($event)" *ngIf="hero.status==1 && hero.blood > 0" class="btn btn-sm btn-primary">出征</button>
            <button (click)="back($event)" *ngIf="hero.status==2" class="btn btn-sm btn-danger">撤退</button>
            <button (click)="cure($event)" *ngIf="hero.status==1||hero.status==2" class="btn btn-sm btn-success">治疗</button>
        </div>
    `
})
export class HeroDetailComponent {
    @Input() hero:Hero;

    @Output() dead:EventEmitter<Hero> = new EventEmitter<Hero>();
    @Output('recruit') recruitEmitter:EventEmitter<Hero> = new EventEmitter<Hero>();//招募
    @Output('attack') attackEmitter:EventEmitter<Hero> = new EventEmitter<Hero>();//出征
    @Output('back') backEmitter:EventEmitter<Hero> = new EventEmitter<Hero>();//撤退
    @Output('cure') cureEmitter:EventEmitter<Hero> = new EventEmitter<Hero>();//治疗

    recruit(){
        this.recruitEmitter.emit(this.hero);
    }

    attack(){
        this.attackEmitter.emit(this.hero);
    }

    back(){
        this.backEmitter.emit(this.hero);
    }

    cure(){
        this.cureEmitter.emit(this.hero);
    }

    //kill(){
    //    this.hero.blood = 0;
    //    this.hero.status = HeroStatus.DEAD;
    //    this.dead.emit(this.hero);
    //}


}
