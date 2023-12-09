import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';

import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  idItem:string|null='';
  objItem: Product|any ={};
  constructor( private route: ActivatedRoute,
              public _app: AppService) { }

  ngOnInit(): void {
    this.getItemById();
  }


  getItemById (){
    this.objItem  = {};
    this.route.paramMap.subscribe(params => {
      if(params.has('id')){
        this.idItem = params.get('id');
        this._app.getItemById( this.idItem ).subscribe( res =>{
          const data = res;
          if( !data ){
            return
          }
          this.focusElement();
          console.log(data);
          this.getDescriptionItemById( this.idItem );
          this.objItem = data;
        })
      }
    });
  }

  getDescriptionItemById ( idItem: any ){
     this._app.getDescriptionItemById( idItem ).subscribe( res =>{
          const data = res;
          if( !data ){
            return
          }
          this.objItem.addDesciption =  data;
          console.log(this.objItem);
        })
  }

  async focusElement(){
    const timeout = 1000;
    const detailProduct = document.getElementById("inputSearch");
    if( detailProduct ){
      detailProduct.focus({preventScroll:false});
      setTimeout(() => {
        detailProduct.blur();
      }, timeout);

    }
  }


}
