import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  resultado:number = 0;
  mostrarResultado:boolean = false;	

  constructor() { }

  ngOnInit(): void {
  }

  suma(x:number,y:number) {
  	if(x.toString() == '' || y.toString() == '') {
  		alert('No deje las casillas de texto vacias');
  		return;
  	}
  	this.mostrarResultado = true;
  	this.resultado = parseFloat(x.toString())+parseFloat(y.toString());
  }

  resta(x:number,y:number) {
  	if(x.toString() == '' || y.toString() == '') {
  		alert('No deje las casillas de texto vacias');
  		return;
  	}
  	this.mostrarResultado = true;
  	this.resultado = x-y;
  }

  mult(x:number,y:number) {
  	if(x.toString() == '' || y.toString() == '') {
  		alert('No deje las casillas de texto vacias');
  		return;
  	}
  	this.mostrarResultado = true;
  	this.resultado = x*y;
  }

  div(x:number,y:number) {
  	if(x.toString() == '' || y.toString() == '') {
  		alert('No deje las casillas de texto vacias');
  		return;
  	}
  	if(y == 0) {
  		this.mostrarResultado = false;
  		alert('No es posible dividir entre cero');
  		return;
  	}
  	this.mostrarResultado = true;
  	this.resultado = x/y;
  }
}
