import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blank-page-demo',
  templateUrl: './blank-page-demo.component.html',
  styleUrls: ['./blank-page-demo.component.css']
})
export class BlankPageDemoComponent implements OnInit {
  Title = 'Calculadora de Projetos';
  subtitle = 'Resolva agora mesmo o problema de seu projeto. Utilize a calculadora de projetos agora mesmo.' 

  constructor() { }

  ngOnInit() {
  }

}
