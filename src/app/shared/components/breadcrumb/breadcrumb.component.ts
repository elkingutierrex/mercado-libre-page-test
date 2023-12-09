import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() arrayTags = [];

  constructor( private router : Router) { }

  ngOnInit(): void {
  }

  getItemsByBreadcrumb( nameBreadcrumb: string ){
    const timeOut =50;
    this.router.navigate(['/home']);
    setTimeout(() => {
      this.router.navigate(['/home/items'], { queryParams: { search: nameBreadcrumb }, queryParamsHandling:'merge'} );
    }, timeOut);

  }

}
