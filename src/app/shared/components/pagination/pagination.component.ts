import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  actualPage: number = 1;
  arrayItemsPerPage = [4,10,20]
  @Input() result: any  = {};
  @Output() nextPage : EventEmitter<boolean> = new EventEmitter();

  constructor( public _app : AppService) { }

  ngOnInit(): void {

  }

  changePage( next:number ){
    const length = this.result.total;
    const position =  this._app.objCtrl.actualPage;
    if (( length >  (position + next) && next > 0) ||
        ((position + next) > 0 && next < 0) ){
        this._app.objCtrl.actualPage =  position + next;
        this.emitEvent();
    }
  }

  emitEvent(){
    return this.nextPage.emit(true);
  }


}
