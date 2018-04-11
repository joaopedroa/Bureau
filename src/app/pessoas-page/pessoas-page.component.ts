import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../_providers/pessoa.service';
import { Pessoa } from '../_models/pessoa';

@Component({
  selector: 'app-pessoas-page',
  templateUrl: './pessoas-page.component.html',
  styleUrls: ['./pessoas-page.component.css']
})
export class PessoasPageComponent implements OnInit {
  pessoasList: Array<Pessoa> = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoaService.getAll()
    .then(data => {
      this.pessoasList = data;
    })
    .catch(err => {
      console.log(err);
    });
  }

}
