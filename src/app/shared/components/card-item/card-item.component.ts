import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() title:String ='';
  @Input() price:number = 0;
  @Input() imageUrl:string = '';

  @Input() objItem :object | any = {};


  constructor() { }

  ngOnInit(): void {
  }

}
