import { dataDaga, dataMaza, dataSable } from './datos';
import { EfectoAlteracion } from './efectoAlteracion';

class Arma{    
    constructor(
        public readonly tipo: string, 
        public readonly tipoDanio: string, 
        public readonly danio: number,
        public readonly efectoAlteracion: EfectoAlteracion
    ) { }

    toString(): void{
        console.log('Arma: ' + this.tipo + '. Tipo de daño: '
        + this.tipoDanio + '. Daño: ' + this.danio + '.\nEfecto: '
        + (this.efectoAlteracion.prob * 100) + '% de probabilidades de causar '
        + this.efectoAlteracion.tipoEfecto + ' durante '
        + this.efectoAlteracion.duracion + ' turnos causando '
        + this.efectoAlteracion.danioPorTurno + ' de daño por turno');
    }
}

export class Sable extends Arma {
    constructor(){
        super(
            dataSable.tipo,
            dataSable.tipoDanio,
            dataSable.danio,
            dataSable.efectoAlteracion);
    }

}

export class Daga extends Arma {
    constructor(){
        super(
            dataDaga.tipo,
            dataDaga.tipoDanio,
            dataDaga.danio,
            dataDaga.efectoAlteracion);
    }

}

export class Maza extends Arma {
    constructor(){
        super(
            dataMaza.tipo,
            dataMaza.tipoDanio,
            dataMaza.danio,
            dataMaza.efectoAlteracion);
    }
}