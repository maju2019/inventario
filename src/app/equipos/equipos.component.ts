import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  prueba:string

  constructor() { }

  ngOnInit() {
    this.prueba = "asdasd"
  }

}
