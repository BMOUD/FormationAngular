import { Selfie } from 'src/app/models/selfie';
import { Injectable } from '@angular/core';
import { Wookie } from 'src/app/models/wookie';

@Injectable({
  providedIn: 'root'
})
export class SelfieService {

  constructor() { }

  getAll(): Selfie[]{
    const tableau: Selfie[] = [];
    let selfie = new Selfie();
    selfie.image = 'https://www.funnylla.com/articles-images/207/one-fun-day-in-the-life-of-a-wookie_big.jpg';
    selfie.titre = 'Super photo';
    selfie.wookie = new Wookie();
    selfie.wookie.name = "Chewie";
    tableau.push(selfie);

    tableau.push({
                    image: 'https://i.ytimg.com/vi/M1vQmU39uV8/maxresdefault.jpg',
                    titre:'Photo de ouf',
                    wookie:{
                              name : 'Turloff',
                              selfies: []
                    }
    });

    return tableau;
  }
}
