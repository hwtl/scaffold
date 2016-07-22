import { Injectable } from '@angular/core';
import {Hero} from "./hero";

@Injectable()
export class MagicService {

    value:number = 100;

    constructor(value?:number){
        this.value = value;
        console.log('MagicService');
    }

    cure(hero: Hero){
        hero.blood = Math.min(hero.maxHP, hero.blood + this.value);
    }
}

export function magicServiceFactory(value: number) {
    return function(){
        return new MagicService(value);
    }
}