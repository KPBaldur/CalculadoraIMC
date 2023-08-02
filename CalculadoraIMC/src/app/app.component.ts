import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CalculadoraIMC';

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

  OnResultado() {
    console.log(this.operacion)
  }
}
