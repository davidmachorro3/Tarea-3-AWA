import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { PrimoComponent } from './components/primo/primo.component';
import { NotasComponent } from './components/notas/notas.component';


const routes: Routes = [{path:"calculadora", component: CalculadoraComponent}, {path:"primo", component: PrimoComponent}, {path:"notas", component: NotasComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
