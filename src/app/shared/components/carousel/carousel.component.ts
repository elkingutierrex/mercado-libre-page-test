import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() arrayImages : Array<any> = [];
  pictureArrayPosition: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.pictureArrayPosition = 0;
  }

  changePosition( next : number ){
    const length = this.arrayImages.length;
    const position =  this.pictureArrayPosition;
    if ((length >  (position + next) && next > 0) ||
        ((position + next) >= 0 && next < 0) ){
      this.pictureArrayPosition =  this.pictureArrayPosition + next;
    }
  }

}
