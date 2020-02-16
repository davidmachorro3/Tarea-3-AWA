import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  notas:string[] = [];	
  	
  constructor() { }

  ngOnInit(): void {
  }

  agregarNota(materia:string,nota:number) {
  	if(nota < 0) {
  		alert('Ingrese numeros positivos unicamente');
  		return;
  	}
  	if(materia == '' || nota.toString() == '') {
  		alert('No deje las casillas de texto vacias');
  		return;
  	}
  	this.notas.push(materia + '\t' + nota.toString());
  }
}
