import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class LancamentoService {

  lancamentoUrl = 'http://localhost:8081/lancamentos';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {
    let params = new HttpParams();
    let headers = new HttpHeaders();

    headers = headers.append('Authorization', 'Basic YWRtaW5AY29udHJvbG1vbmV5LmNvbTphZG1pbg==');

    params = params.append('page', filtro.pagina.toString());
    params = params.append('size', filtro.itensPorPagina.toString());

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

    return this.http.get<any>(`${this.lancamentoUrl}?resumo`, { headers, params })
      .toPromise()
      .then(response => {
        const responseJson = response;
        const lancamentos = response.content;

        const resultado = {
          lancamentos,
          total: response.totalElements
        };

        return resultado;
      });
  }

  excluir(codigo: number): Promise<void> {
    let headers = new HttpHeaders();

    headers = headers.append('Authorization', 'Basic YWRtaW5AY29udHJvbG1vbmV5LmNvbTphZG1pbg==');
    return this.http.delete(`${this.lancamentoUrl}/${codigo}`, { headers })
    .toPromise()
    .then(() => null);
  }
}
