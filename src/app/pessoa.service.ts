import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  currentId: any;

  constructor(private http: HttpClient) { }

  getPessoas(url) {
    return this.http.get(`${API_URL}/${url}`);
  }

  getPessoa(url) {
    return this.http.get(`${API_URL}/${url}/${this.currentId}`);
  }
}
