import { PesquisaPessoaComponent } from './../pessoas/pesquisa-pessoa/pesquisa-pessoa.component';
import { LancamentosPesquisaComponent } from './../lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { PessoaService } from './../pessoas/pessoa.service';
import { LancamentoService } from './../lancamentos/lancamento.service';
import { ErrorHandlerService } from './error-handler.service';
import { NavbarComponent } from './navbar/navbar.component';

import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { LancamentoCadastroComponent } from '../lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { PessoaCadastroComponent } from '../pessoas/pessoa-cadastro/pessoa-cadastro.component';

registerLocaleData(localePt);

const routes: Routes = [
  { path: 'lancamentos', component: LancamentosPesquisaComponent },
  { path: 'lancamentos/novo', component: LancamentoCadastroComponent },
  { path: 'lancamentos/:codigo', component: LancamentoCadastroComponent },
  { path: 'pessoas', component: PesquisaPessoaComponent },
  { path: 'pessoas/novo', component: PessoaCadastroComponent }
];

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    ConfirmDialogModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule,
    RouterModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },

    MessageService,
    ConfirmationService,

    LancamentoService,
    PessoaService,

    ErrorHandlerService
  ]
})
export class CoreModule { }
