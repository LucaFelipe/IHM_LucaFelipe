import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/models/IProduto';
import { AlertService } from 'src/app/services/alert.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-tabela',
  templateUrl: './produto-tabela.component.html',
  styleUrls: ['./produto-tabela.component.scss']
})
export class ProdutoTabelaComponent implements OnInit{
  produtos : IProduto[] = [];
  constructor(private service: ProdutoService, private alertservice: AlertService){}

  ngOnInit(): void {
    this.service.findall().subscribe({
      next: (dados) => this.produtos = dados,
      error: (e) => {
        const tit = 'Erro buscando produtos';
        const msg = e.message;
        this.alertservice.error(tit,msg);
        console.error(e);
      }
    });
  }
}
