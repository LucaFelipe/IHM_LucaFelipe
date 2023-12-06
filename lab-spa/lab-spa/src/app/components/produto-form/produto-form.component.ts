import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduto } from 'src/app/models/IProduto';
import { AlertService } from 'src/app/services/alert.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit{
  formulario !: FormGroup;
  descricao: string = '';
  preco: number = 0;

  constructor(
    private produtoService:ProdutoService,
    private alertService: AlertService,
    private router: Router,
    private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      descricao: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      preco: [0, Validators.required]
    });
  }

  get fcDescricao(){return this.formulario.get('descricao');}
  get fcPreco(){return this.formulario.get('preco');}

  onCadastrar(){
    if(this.formulario.invalid){
      this.alertService.error('Formulário inválido', 'Existem campos pendentes');
    }

    let produto : IProduto = {
      descricao: this.descricao, preco: this.preco
    };
    this.produtoService.create(produto).subscribe({
      next: (data)=>{
        produto = data;
        const tit = 'Sucesso';
        const msg = 'Produto salvo com sucesso';
        this.alertService.sucess(tit,msg);
        this.router.navigate(['/produtotabela']);
      }
    })
  }

}
