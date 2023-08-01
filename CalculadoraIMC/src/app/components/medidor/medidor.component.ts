import { Component } from '@angular/core';

@Component({
  selector: 'app-medidor',
  templateUrl: './medidor.component.html',
  styleUrls: ['./medidor.component.scss']
})
export class MedidorComponent {
  constructor(){
  }

  OnInit(){
  }

  peso!:number;

  altura!:number;

  resultado!:number;

  operacion() {
    this.resultado=this.peso / (this.altura * this.altura);
    this.resultado= Math.round(this.resultado);
  }
}
