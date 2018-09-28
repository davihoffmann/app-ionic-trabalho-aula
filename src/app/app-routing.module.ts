import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' , canActivate: [AuthGuard]},
  { path: 'pessoa', loadChildren: './pessoa/pessoa.module#PessoaPageModule', canActivate: [AuthGuard]},
  { path: 'pessoa-detail', loadChildren: './pessoa-detail/pessoa-detail.module#PessoaDetailPageModule' , canActivate: [AuthGuard]},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
