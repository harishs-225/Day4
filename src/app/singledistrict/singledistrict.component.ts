import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { HeroService } from '../hero.service';
import { DistrictComponent } from '../pages/district/district.component';

@Component({
  selector: 'app-singledistrict',
  templateUrl: './singledistrict.component.html',
  styleUrls: ['./singledistrict.component.css']
})
export class SingledistrictComponent {
  single: any
  constructor(private District:HeroService){}
  ngOnInit():void{
    let pageId = localStorage.getItem('id');
    let singleDataArray=this.District.getData();
    this.single = singleDataArray.filter(e => e.id === pageId)
    console.log(this.single);
  }


}
