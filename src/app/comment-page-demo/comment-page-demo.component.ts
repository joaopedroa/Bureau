import { Component, OnInit } from '@angular/core';
import { uiState } from '../../environments/uicontext';
import { HttpUtilsService } from '../_services/http-utils.service';
import { Router } from '@angular/router';

import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-comment-page-demo',
  templateUrl: './comment-page-demo.component.html',
  styleUrls: ['./comment-page-demo.component.css']
})
export class CommentPageDemoComponent implements OnInit {
  coloumns: { caption: string; fieldName: string; }[] = [];
  urlGet = 'https://jsonplaceholder.typicode.com/comments';
  comments: Array<Comment>;


  constructor(private httpUtilsService: HttpUtilsService, private router: Router) {
  }

  ngOnInit() {
    const data = [
      {
        caption: 'Nome',
        fieldName: 'name',
        widht: 30
      },
      {
        caption: 'Especialidade',
        fieldName: 'email',
        widht: 20
      },
      {
        caption: 'Registro',
        fieldName: 'postId',
        widht: 10
      }
    ];

    this.coloumns = data;

    this.evocaGet();
  }

  evocaGet() {
    uiState.inTransaction = true;
    const r = this.httpUtilsService.get(this.urlGet, '').then(data => {
      this.comments = data;
      uiState.inTransaction = false;
    }).catch(err => {
      uiState.inTransaction = false;
    });
  }

  onColSelected(dataRow) {
    console.log('Selecionando: ', dataRow);
  }

  onEditRow(dataRow) {
    console.log('Editando: ', dataRow);
    this.router.navigate(['/detail-comment']);
  }

  onDelRow(dataRow) {
    console.log('Deletando: ', dataRow);
  }

  onAddRow() {
    console.log('Adiciona Linha');
  }

  onKeyFilter(strSearch) {
    console.log('Filtrando: ', strSearch);
  }

}
