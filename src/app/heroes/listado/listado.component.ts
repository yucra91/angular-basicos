import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent{

  eliminado:string='';

  heroes  : string[]=['Ironman','Spiderman','Hulk','Tor']
borrarHeroe(){
  console.log('borrando.....');
  this.eliminado =this.heroes.shift() || '';
  
  
}


}
