import { Component, OnInit, ViewChild, TemplateRef, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { uiState } from '../../environments/uicontext';
import { HttpUtilsService } from '../_services/http-utils.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-hk-data-grid',
  templateUrl: './hk-data-grid.component.html',
  styleUrls: ['./hk-data-grid.component.css']
})
export class HkDataGridComponent implements OnInit {
  urlGet = 'https://jsonplaceholder.typicode.com/comments';
  @Input() dataTable: Array<any>;
  @Input() columns: Array<any>;
  @Output() colSelected: EventEmitter<any> = new EventEmitter();
  @Output() editRow: EventEmitter<any> = new EventEmitter();
  @Output() delRow: EventEmitter<any> = new EventEmitter();
  @Output() keyFilter: EventEmitter<any> = new EventEmitter();
  @Output() addRow: EventEmitter<any> = new EventEmitter();
  strsearch = '';
  @Input() itemsPage = 10;

  constructor(private httpUtilsService: HttpUtilsService ) { }

  ngOnInit() {
  }

  doFilter() {
    this.keyFilter.emit(this.strsearch);
  }

  getFieldContent(dataFieldRow, field) {
    return dataFieldRow[field];
  }

  doSelectRow(dataFieldRow) {
    this.colSelected.emit(dataFieldRow);
  }

  doEditRow(dataFieldRow) {
    this.editRow.emit(dataFieldRow);
  }

  doDelRow(dataFieldRow) {
    this.delRow.emit(dataFieldRow);
  }

  doAddRow() {
    this.addRow.emit();
  }

}
