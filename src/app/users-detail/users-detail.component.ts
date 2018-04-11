import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { HkDataFormComponent } from '../hk-data-form/hk-data-form.component';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit, OnDestroy, AfterViewInit {
  subClick: any;
  dynamicButtons: Array<any>;
  sub: any;
  fieldConfig: Array<any>;
  user: any;

  @ViewChild(HkDataFormComponent) hkDataForm: HkDataFormComponent;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const data = [
      {
      rowCaption: 'Linha 1',
      fields:
      [
        {
          fieldName: 'id',
          fieldLabel: 'Id do Usuário',
          fieldType: 'text',
          fieldPlaceHolder: 'Id do Usuário',
          fieldValidators: [Validators.required, Validators.minLength(2)]
        },
        {
          fieldName: 'name',
          fieldLabel: 'Nome do Usuário',
          fieldType: 'input',
          fieldPlaceHolder: 'Digite o nome do usuário',
          fieldValidators: [Validators.required, Validators.minLength(5)]
        },
        {
          fieldName: 'email',
          fieldLabel: 'email do Usuário',
          fieldType: 'email',
          fieldPlaceHolder: 'Entre com o email',
          fieldValidators: [Validators.required, Validators.email]
        }
      ]},
      {rowCaption: 'Linha 2',
      fields:
      [
        {
          fieldName: 'phone',
          fieldLabel: 'Telefone',
          fieldType: 'input',
          fieldPlaceHolder: 'Telefone'
        },
        {
          fieldName: 'website',
          fieldLabel: 'Site do Usuário',
          fieldType: 'input',
          fieldPlaceHolder: 'Site'
        }
      ]}
    ];

    this.fieldConfig = data;

    this.dynamicButtons = [];

    this.dynamicButtons.push({
      class: 'btn btn-info',
      id: 'btnDyn',
      type: 'button',
      text: 'Dynamic'
    });

    this.dynamicButtons.push({
      class: 'btn btn-primary',
      id: 'btnSalvar',
      type: 'button',
      text: 'Salvar'
    });

    this.dynamicButtons.push({
      class: 'btn btn-danger',
      id: 'btnCancelar',
      type: 'reset',
      text: 'Cancelar'
    });


    this.sub = this.route.params.subscribe(params => {
      this.user = JSON.parse(params['user']);
      console.log(this.user);
   });

  }

  ngAfterViewInit() {
    console.log(this.hkDataForm);

    this.subClick = this.hkDataForm.doCustomButtomClick.subscribe(state => {
      this.onClickButton(state);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.subClick.unsubscribe();
  }

  onClickButton(state) {
    if (state.buttonId === 'btnSalvar') {
      this.router.navigate(['/users-list']);
    }
  }

}
