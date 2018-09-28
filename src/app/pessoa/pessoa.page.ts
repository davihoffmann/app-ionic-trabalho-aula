import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.page.html',
  styleUrls: ['./pessoa.page.scss'],
})
export class PessoaPage implements OnInit {

  data: any;
  arrayNome: any;
  constructor(private pessoaService: PessoaService, private router: Router) { }

  ngOnInit() {
    this.pessoaService.getPessoas('pessoas').subscribe(data => {
      this.data = data;
      this.arrayNome = this.data.nome.split(" ");
      this.data.nome = this.arrayNome[1] + ", " + this.arrayNome[0];
    });
  }

  showPessoaDetail(id) {
    this.pessoaService.currentId = id;
    this.router.navigate(['/pessoa-detail']);
  }

}