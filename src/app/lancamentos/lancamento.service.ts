import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
}

@Injectable()
export class LancamentoService {

  lancamentoUrl = 'http://localhost:8081/lancamentos';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {

    let params = new HttpParams();

    if (filtro.descricao){
      params = params.append('descricao', filtro.descricao);
    }

    if (filtro.dataVencimentoInicio){
      params = params.append('dataVencimentoDe',
        moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    }

    if (filtro.dataVencimentoFim){
      params = params.append('dataVencimentoAte',
        moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    console.log(params);

    return this.http.get<any>(`${this.lancamentoUrl}?resumo`, { params })
      .toPromise()
      .then(response => response.content);
  }
}