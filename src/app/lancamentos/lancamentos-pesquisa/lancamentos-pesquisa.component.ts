import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {
  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra pão', dataVencimento: new Date(2020, 6, 30),
     dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
    { tipo: 'DESPESA', descricao: 'Compra pão', dataVencimento: new Date(2020, 6, 30),
     dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
    { tipo: 'DESPESA', descricao: 'Compra pão', dataVencimento: new Date(2020, 6, 30),
     dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
    { tipo: 'DESPESA', descricao: 'Mensalidade Escola', dataVencimento: new Date(2020, 6, 30),
    dataPagamento: new Date(2020, 7, 10), valor: 500.00, pessoa: 'Centro Universitario do Distrito Federal' },
    { tipo: 'RECEITA', descricao: 'Compra pão', dataVencimento: new Date(2020, 6, 30),
     dataPagamento: new Date(2020, 7, 11), valor: 4.55, pessoa: 'Padaria do José' },
    { tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: new Date(2020, 6, 30),
     dataPagamento: null, valor: 700.00, pessoa: 'Padaria do José' },
    { tipo: 'RECEITA', descricao: 'Compra pão', dataVencimento: new Date(2020, 6, 30),
     dataPagamento: new Date(2020, 7, 15), valor: 4.55, pessoa: 'Padaria do José' },
    { tipo: 'DESPESA', descricao: 'Compra pão', dataVencimento: new Date(2020, 6, 30),
     dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' }
  ];
}
