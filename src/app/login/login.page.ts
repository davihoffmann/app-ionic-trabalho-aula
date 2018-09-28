import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  usuario = {}

  logForm() {
    this.http.post("https://my-json-server.typicode.com/davihoffmann/trabalho-api-test", this.usuario);
    this.router.navigate(['/pessoa']);
  }

  ngOnInit() {
  }

}
