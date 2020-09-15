import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-pessoa',
  templateUrl: './pesquisa-pessoa.component.html',
  styleUrls: ['./pesquisa-pessoa.component.css']
})
export class PesquisaPessoaComponent {
  status = '';
  pessoas = [
    { nome: 'Gerson', cidade: 'Brasilia', estado: 'DF',
     ativo: true},
    { nome: 'João', cidade: 'Urucuia', estado: 'MG',
     ativo: true},
    { nome: 'Maria', cidade: 'São Francisco', estado: 'MG',
     ativo: false},
    { nome: 'José', cidade: 'Brasilia', estado: 'DF',
     ativo: true},
    { nome: 'João de Deus', cidade: 'Brasilia', estado: 'DF',
     ativo: false},
    { nome: 'Tião', cidade: 'Brasilia', estado: 'DF',
     ativo: true},
    { nome: 'Sebastian', cidade: 'Brasilia', estado: 'DF',
     ativo: false},
    { nome: 'Rutilio', cidade: 'Brasilia', estado: 'DF',
     ativo: true},
    { nome: 'Fulano', cidade: 'Brasilia', estado: 'DF',
     ativo: true}
  ];

}
