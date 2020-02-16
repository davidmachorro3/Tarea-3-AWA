import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.css']
})
export class PrimoComponent implements OnInit {
  mostrarTexto:boolean = false; 
  esPrimo:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  primo(numero:number) {
  	if(numero.toString() == '' || numero < 0) { //Verificar casilla vacia
  		this.mostrarTexto = false;
  		alert('Ingrese un numero en la casilla de texto. Ingrese numeros positivos unicamente');
  		return;
  	}
  	this.mostrarTexto = true;
  	let cont = 0;
  	for(let i=2;i < numero;i++) {
  		if((numero%i) == 0) {
  			cont = cont + 1;
  		}
  	}
  	this.esPrimo = ((cont == 0 || numero == 2) && numero != 1);
  }
}
