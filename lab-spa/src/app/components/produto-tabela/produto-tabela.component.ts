import { IProduto } from './../../models/produto.model';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-tabela',
  templateUrl: './produto-tabela.component.html',
  styleUrls: ['./produto-tabela.component.css']
})

export class ProdutoTabelaComponent implements OnInit {

  produtos : IProduto[] = [];

  constructor(
    private service:ProdutoService,
    private alertService:AlertService
    ){}

  ngOnInit(): void {
    this.service.findAll().subscribe({
      next:(dados) => {this.produtos = dados}
    ,
    error: (e)=>{
      const tit = 'Erro buscando produto';
      const msg = e.message;
      this.alertService.error(tit,msg);
      console.error(e);
    }
  });
 }
}
