import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { } //Inyeccion de codigo, "servicio" que Angular ya esta inicializado y se le asigna automaticamente a las instancias de este objeto para su uso 

  ngOnInit(): void {
  }

  GoTo(ruta:string) {
  	this.router.navigateByUrl(ruta); //En typescript siempre es necesario hacer referencia a los atributos que son propios de clase con "this"
  }
}
