import { Router } from '@angular/router';
import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-detail',
  templateUrl: './pessoa-detail.page.html',
  styleUrls: ['./pessoa-detail.page.scss'],
})
export class PessoaDetailPage implements OnInit {

  pessoa: any;
  constructor(private pessoaService: PessoaService, private router: Router) { }

  ngOnInit() {
    this.pessoaService.getPessoa("pessoas").subscribe(data => {
      this.pessoa = data;
    })
  }

}
