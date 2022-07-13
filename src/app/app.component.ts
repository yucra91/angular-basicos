import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  templateUrl:'app.component.html'
  // template:'<span>Romer</span>'
})
export class AppComponent {
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

