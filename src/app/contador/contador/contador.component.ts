
import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template:`

    <h1>{{title}}</h1>

        <!-- <button (click)="acumular(1)" > +1</button>
        <span>
        {{numero}}
        </span>

        <button (click)="acumular(-1)"> -1</button> -->


        <button (click)="acumularbase(base)"> +{{base}}</button>



        <h3>la base es: <span> {{numero}}</span></h3>
    
    `
})

export class ContadorComponent{
    title:  string = 'bases';

    base: number=5;
  
    numero: number=5;
  
    acumularbase(base1:number){
      this.numero+=base1;
  
    }
  sumar()
  {
    this.numero+=1;
  }
  restar()
  {
    this.numero-=1;
  }
  
  acumular(valor:number){
    this.numero+=valor;
  }

}