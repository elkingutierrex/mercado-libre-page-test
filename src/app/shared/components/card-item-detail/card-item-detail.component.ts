import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

declare let alertify : any;

@Component({
  selector: 'app-card-item-detail',
  templateUrl: './card-item-detail.component.html',
  styleUrls: ['./card-item-detail.component.scss']
})
export class CardItemDetailComponent implements OnInit {


  @Input() product: Product | any = {};

  constructor() { }

  ngOnInit(): void {
  }

  buyItem ( item:string ){
    alertify.warning('Esta función no esta disponible en el test Mercado Libre!');
  }

}
