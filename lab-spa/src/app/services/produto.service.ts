import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IProduto } from '../models/produto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private readonly URI_PRODUTOS = "http://localhost:8081/produto";

  constructor(private http: HttpClient) {}

  public findAll(): Observable<IProduto[]>{
    return this.http.get<IProduto[]>(this.URI_PRODUTOS);
  }

  public create(produto:IProduto):Observable<IProduto>{
    return this.http.post<IProduto>(this.URI_PRODUTOS, produto);
  }

}
