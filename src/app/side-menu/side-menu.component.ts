import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  itens = [
    {
      href: '#menu0',
      dataparent: '#sidebar',
      icon: 'fa fa-dashboard',
      caption: 'Item Variável',
      submenus: [
        {
          id: 'menu0',
          items: [
            {
              href: '#menu0submenu0',
              caption: 'Home',
              routerLink: '/home-page'
            },
            {
              href: '#menu0submenu1',
              caption: 'Bureau',
              routerLink: '/blank-demo'
            },
            {
              href: '#menu0submenu2',
              caption: 'Cadastro de Pessoas',
              routerLink: '/pessoas-page'
            },
            {
              href: '#menu0submenu3',
              caption: 'Lista de Comentários',
              routerLink: '/grid-comment'
            },
            {
              href: '#menu0submenu4',
              caption: 'Lista de Usuários',
              routerLink: '/users-list'
            }]
        }]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
