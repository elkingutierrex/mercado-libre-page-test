import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
declare const alertify : any;

@Injectable({
  providedIn: 'root'
})
export class AppService {


  apiUrl = environment.apiUrl;
  objCtrl={
    limitItemsPerPage : 4,
    actualPage        : 1,
    offsetPage        : 0,
    idItemSearch      : '',
    productSearch     : '',
    swSearchComplete  : false,
    txtPlaceholder    : "Nunca dejes de buscar"
  }

  constructor( private http : HttpClient ) { }

  startSearch(){
    this.objCtrl.swSearchComplete = false;
  }

  catchError( res:any ){
    const responseHttp = {
      _200:200,
      _404:404
    }

    this.objCtrl.swSearchComplete = true;

    if( res.status === responseHttp._404 ){
      alertify.message(res.message)
    }

  }

  getItemsByQuery( query:string ){
    const queryIn = {
      q     : query,
      limit : this.objCtrl.limitItemsPerPage,
      offset: (this.objCtrl.actualPage * this.objCtrl.limitItemsPerPage) - this.objCtrl.limitItemsPerPage
    }
    return this.http.get(`${this.apiUrl}/search/getItemsByQuery` ,  { params:queryIn } );
  }

  getItemById( query:any ){
    const queryIn = {
      id : query
    }
    return this.http.get(`${this.apiUrl}/search/getItemById`, { params:queryIn } );
  }

  getDescriptionItemById( query:any ){
    const queryIn = {
      id : query
    }
    return this.http.get(`${this.apiUrl}/search/getDescriptionItemById`, { params:queryIn } );
  }


}
