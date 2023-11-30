import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduto } from 'src/app/models/produto.model';
import { AlertService } from 'src/app/services/alert.service';
import { ProdutoService } from 'src/app/services/produto.service';

export class ProdutoFormComponent{

  formulario !: FormGroup;

  constructor(
    private produtoService:ProdutoService,
    private alertService:AlertService,
    private router: Router,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void{
    this.formulario = this.formBuilder.group({
      descricao: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      preco: [0, Validators.required]
    });
  }

  onCadastrar(){

    let produto: IProduto = this.formulario.value

    this.produtoService.create(produto).subscribe({
      next: (data) => {
        produto = data;
        const tit = 'Sucesso';
        const msg = 'Produto salvo com ID: ' + produto.id;
        this.alertService.sucess(tit,msg)
      }
      ,
      error:(e) =>{
        const tit = 'Erro';
        const msg = e.message;
        this.alertService.console.error(tit, msg);
      }

    });

  }
}
