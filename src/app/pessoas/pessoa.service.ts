import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

export class PessoaFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class PessoaService {

  pessoaUrl = 'http://localhost:8081/pessoas';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: PessoaFiltro): Promise<any> {

    let params = new HttpParams();
    let headers = new HttpHeaders();

    headers = headers.append('Authorization', 'Basic YWRtaW5AY29udHJvbG1vbmV5LmNvbTphZG1pbg==');

    params = params.append('page', filtro.pagina.toString());
    params = params.append('size', filtro.itensPorPagina.toString());

    if (filtro.nome){
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any>(`${this.pessoaUrl}?`, { headers, params })
      .toPromise()
      .then(response => {
        const responseJson = response;
        const pessoas = response.content;

        const resultado = {
          pessoas,
          total: response.totalElements
        };

        return resultado;
      });
  }

  excluir(codigo: number): Promise<void> {
    let headers = new HttpHeaders();

    headers = headers.append('Authorization', 'Basic YWRtaW5AY29udHJvbG1vbmV5LmNvbTphZG1pbg==');

    return this.http.delete(`${this.pessoaUrl}/${codigo}`, { headers })
    .toPromise()
    .then(() => null);
  }
}
