import { Component, OnInit } from '@angular/core';
import { uiState } from '../../environments/uicontext';
import { UserServiceService } from '../_providers/user-service.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../_models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  coloumns: { caption: string; fieldName: string; }[] = [];
  urlGet = 'https://jsonplaceholder.typicode.com/comments';
  users: Array<User>;

  constructor(private userService: UserServiceService, private router: Router) {


   }

  ngOnInit() {
    const dataCol = [
      {
        caption: 'Id Usuário',
        fieldName: 'id',
        widht: 10
      },
      {
        caption: 'Endereço eletrônico',
        fieldName: 'email',
        widht: 30
      },
      {
        caption: 'Nome',
        fieldName: 'name',
        widht: 50
      }
    ];

    this.coloumns = dataCol;

    uiState.inTransaction = true;
    const r = this.userService.getAll().then(data => {
      this.users = data;
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
    this.router.navigate(['/users-detail', {user: JSON.stringify(dataRow)}]);
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
