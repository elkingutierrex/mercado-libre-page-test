import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss']
})
export class NoDataComponent implements OnInit {

  @Input() txtNoData : string = 'No se encontrarón coincidencias!!'

  constructor() { }

  ngOnInit(): void {
  }

}
