import { Component, OnInit, Input, NgModule ,Inject} from '@angular/core';
import {Ng2PageScrollModule, PageScrollInstance,PageScrollService} from 'ng2-page-scroll';
import { DOCUMENT} from '@angular/common';
@Component({
  selector: 'app-hk-blank-form',
  templateUrl: './hk-blank-form.component.html',
  styleUrls: ['./hk-blank-form.component.css']
})

@NgModule({
  imports: [
      /* Other imports here */
      Ng2PageScrollModule
      ]
})
export class HkBlankFormComponent implements OnInit {
 
  @Input() Title = 'Blank Page';
  @Input() subtitle ;
  constructor() { }

  ngOnInit() {
  }

  projeto:string = ' Obviamente, é necessário que tenhamos o projeto arquitetônico definido para elaborar os complementares. Todavia, muitas vezes o projetista da estrutura recebe somente o projeto já aprovado na prefeitura, que normalmente sofreu um longo e burocrático processo até sua aprovação. Por conta disso, o arquiteto e o proprietário dificilmente aceitam realizar mudanças na arquitetura já aprovada para melhor adaptação ao projeto estrutural. Embora essa seja uma prática corrente, não é a melhor forma de trabalho. Quanto mais cedo o projetista da estrutura tiver acesso ao arquitetônico, melhor. Quando o arquitetônico ainda é apenas um estudo preliminar ou um projeto básico, já é possível fazer um pré-lançamento da estrutura e fazer pequenos ajustes na arquitetura, mas que podem fazer grande diferença para a solução estrutural, tanto no aspecto de desempenho quanto em economia. Quanto mais oportunidade de ajustar a arquitetura, melhor será a estrutura e a obra. Procure então convencer seu cliente a repassar o projeto arquitetônico o mais breve possível.'
  projetoEstrutural:string  = 'O projeto de uma estrutura é desenvolvido por um engenheiro civil, em boa parte dos casos, com expertise na área. Além de desenvolver o projeto o engenheiro civil torna-se responsável pela estrutura que desenvolveu, garantindo por meio de uma anotação de responsabilidade técnica que todo o projeto foi desenvolvido em observância das normas vigentes e de boas práticas da engenharia.';
  concretoArmado:string = 'Concreto armado é um tipo de estrutura que utiliza armações feitas com barras de aço. Essas ferragens são utilizadas devido à baixa resistência aos esforços de tração do concreto, que tem alta resistência à compressão.';
  alvenaria:string = 'Alvenaria estrutural é um sistema de construção em que as paredes da edificação fazem a função estrutural, não sendo necessário o emprego de vigas e pilares para a sustentação do edifício, substituindo o método tradicional de concretagem.A alvenaria do tipo estrutural se caracteriza pelo emprego de blocos de concreto ou cerâmicos autoportantes. Deve-se frisar ao fornecedor a escolha do bloco estrutural no ato da compra pois geralmente o mesmo possui blocos estruturais e de vedação para a venda.'
  concreto:string = 'O concreto é um composto que apresenta ótima resistência à compressão, mas pouca resistência à tração. Para melhorar seu comportamento em relação a este segundo quesito, a opção é agregar barras de aço (armadura) ao interior da mistura. "Assim se constitui o concreto armado", afirma a engenheira Mariana Pestana de Carvalho, colaboradora na PhD Engenharia. Nas estruturas de concreto armado, o comportamento estrutural depende da aderência entre o concreto e a armadura. "Por isso, muitas vezes são utilizadas barras nervuradas nesta aplicação", complementa. '
  lajes:string = 'Lajes são elementos planos (placas), geralmente em posição horizontal, que apresentam uma dimensão, uma espessura, muito menor em relação às demais. As lajes recebem os carregamentos atuantes e os transferem aos apoios dispostos no contorno, geralmente vigas, e destes para os pilares até as fundações. Nas estruturas usuais, as lajes respondem por aproximadamente 50 % do consumo de concreto.'
  memoria:string = 'A memória de cálculo ou memorial de cálculo, é o documento, anexo ao projeto, que descreve em detalhes os cálculos efetuados até chegar ao resultado final apresentado neste. A memória de cálculo é de suma importância para detectar problemas ou erros de cálculo no projeto executado, bem como para melhor entendimento quando forem necessárias alterações ou gestão do projeto por outro profissional.';
  memorial:string = 'Um memorial descritivo é um documento que detalha todo o projeto a ser realizado, onde estão relacionados, um a um, todos os itens da edificação a ser construída. Estruturas, acabamentos, instalações, tudo deverá ser informado de acordo com o que será realizado na obra.';
  levantamento:string = 'O levantamento topográfico visa gerar um modelo da porção de terra, subterrânea ou superficial que se tornará planta do local onde será realizada a obra. O processo é dividido em fase de coleta, processamento e tratamento de dados, disposição e gerenciamento das informações coletadas, que irá compor relatório e planta da área. "São mapas em escala, uma cartografia voltada à implantação de projetos, com mais detalhes", explica Jorge Cintra';
  alvara:string = 'Estando o projeto arquitetônico aprovado e as taxas pagas, a secretaria de urbanismo libera o alvará de construção. ';
  habite:string = 'Certificado de Vistoria e Conclusão de Obra ou Habite-se. Quando da conclusão da obra, deve ser solicitado junto a secretaria de urbanismo a vistoria de conclusão de obra, para que seja verificado se a obra foi realizada exatamente como foi aprovado o projeto.Para obras acima de 70m² o registro de imóveis solicita a CND do INSS (Certidão Negativa de Débitos). Se tratando de obras acima de 70m², no inicio da obra deve ser feita uma matrícula junto ao INSS para o recolhimento dos impostos relativos a execução da obra. Ao final da obra deve ser procurada uma agência da Receita Federal, munido do projeto aprovado, da ART e do CVCO, para que seja verificado o valor devido pela obra ao INSS. A este valor deve ser deduzido o valor recolhido durante a execução, o qual deverá ser pago para a emissão da CND. '

  validaProjeto:string = 'hidden';
  sistemaEstrutural:string = 'hidden';
  calculoEstrutura:string = 'hidden';
  emissaoProjeto:string = 'hidden';
  legalizacao:string = 'hidden';
  respostaProjeto:String = 'hidden';
  respostaProjetoEstrutural:string = 'hidden';
  respostaConcretoArmado:string = 'hidden';
  respostaAlvenaria:string = 'hidden';
  respostaConcreto:string = 'hidden';
  respostaPilares:string = 'hidden';
  respostaLajes:string = 'hidden';
  respostaMemoria:string = 'hidden';
  respostaMemorial:string = 'hidden';
  respostaPlanillha:string = 'hidden';
  respostaLevantamento:string = 'hidden';
  respostaAlvara:string = 'hidden';
  respostaHabite:string = 'hidden';
  clickToggleProjeto(){
    if(this.validaProjeto === 'hidden'){
      this.validaProjeto = 'show'; 
    }else{
      this.validaProjeto = 'hidden';
    }
  }
  clickToggleSistemaEstrutural(){
    if(this.sistemaEstrutural === 'hidden'){
      this.sistemaEstrutural = 'show';
    }else{
      this.sistemaEstrutural = 'hidden';
    }
  }
  clickToggleCalculoEstrutura(){
    if (this.calculoEstrutura === 'hidden'){
      this.calculoEstrutura = 'show';
    }else{
      this.calculoEstrutura = 'hidden';
    }
  }
 clickToggleEmissaoProjeto(){
   if(this.emissaoProjeto === 'hidden'){
    this.emissaoProjeto = 'show';
   }else{
    this.emissaoProjeto = 'hidden';
   }
 }
 clickToggleLegalizacao(){
   if(this.legalizacao ==='hidden'){
     this.legalizacao = 'show';
   }else {
     this.legalizacao = 'hidden'; 
   }
 }
 clickArquitetonico(){
   if(this.respostaProjeto === 'hidden'){
     this.respostaProjeto = 'show';
    
   }else{
     this.respostaProjeto = 'hidden'
   }
 }
 clickEstrutural(){
  if(this.respostaProjetoEstrutural === 'hidden'){
    this.respostaProjetoEstrutural = 'show';
   
  }else{
    this.respostaProjetoEstrutural = 'hidden'
  }
}
clickConcretoArmado(){
  if(this.respostaConcretoArmado === 'hidden'){
    this.respostaConcretoArmado = 'show';
  }else{
    this.respostaConcretoArmado = 'hidden';
  }
}
clickAlvenaria(){
  if(this.respostaAlvenaria === 'hidden'){
    this.respostaAlvenaria = 'show';
  }else{
    this.respostaAlvenaria = 'hidden';
  }
}
clickConcreto(){
  if(this.respostaConcreto === 'hidden'){
    this.respostaConcreto = 'show';
  }else{
    this.respostaConcreto = 'hidden';
  }
}
clickPilares(){
  if(this.respostaPilares === 'hidden'){
    this.respostaPilares = 'show';
  }else{
    this.respostaPilares = 'hidden';
  }
}
clickLajes(){
  if(this.respostaLajes === 'hidden'){
    this.respostaLajes = 'show';
  }else{
    this.respostaLajes = 'hidden';
  }
}
clickMemoria(){
  if(this.respostaMemoria === 'hidden'){
    this.respostaMemoria = 'show';
  }else{
    this.respostaMemoria = 'hidden';
  }
}
clickMemorial(){
  if(this.respostaMemorial === 'hidden'){
    this.respostaMemorial = 'show';
  }else{
    this.respostaMemorial = 'hidden';
  }
}
clickPlanilha(){
  if(this.respostaPlanillha === 'hidden'){
    this.respostaPlanillha = 'show';
  }else{
    this.respostaPlanillha = 'hidden';
  }
}
clickLevantamento(){
  if(this.respostaLevantamento === 'hidden'){
    this.respostaLevantamento = 'show';
  }else{
    this.respostaLevantamento = 'hidden';
  }
}
clickAlvara(){
  if(this.respostaAlvara === 'hidden'){
    this.respostaAlvara = 'show';
  }else{
    this.respostaAlvara = 'hidden';
  }
}
clickHabite(){
  if(this.respostaHabite === 'hidden'){
    this.respostaHabite = 'show';
  }else{
    this.respostaHabite = 'hidden';
  }
}

}
