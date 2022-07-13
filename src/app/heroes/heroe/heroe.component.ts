import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre  :   string='Ironman'
    edad    :   number=25;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();

    }

    obtenerNombre():string {
        // `` se llama bactiks

        return ` ${this.nombre} - ${this.edad}`;
        // return this.nombre + ' - ' + this.edad.toString();

    }

    cambiarNombre():void{
        this.nombre = 'Spiderman'

    }

    cambiarEdad():void{
        this.edad =30;
    }

}