import { TestBed } from '@angular/core/testing';

import { Injectable } from '@angular/core';
import { district } from 'src/assets/data/data';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {}
     getData(){
      return district
       
     }
  
}
