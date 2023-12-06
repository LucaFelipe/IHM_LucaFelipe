import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IProduto } from '../models/IProduto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly URI_PORDUTOS = "http://localhost:8081/produto";
  constructor(private http: HttpClient) { }

  public findall(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(this.URI_PORDUTOS);
  }
}
