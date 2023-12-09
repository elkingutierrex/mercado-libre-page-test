import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  txtSearch : string = '';


  constructor( private router : Router) {

   }

  redirectToUrlWithQuery( txtSearch:string ){
    const timeOut =50;
    this.router.navigate(['/home']);
    setTimeout(() => {
      this.router.navigate(['/home/items'], { queryParams: { search: txtSearch }, queryParamsHandling:'merge'} );
    }, timeOut);
  }

}
