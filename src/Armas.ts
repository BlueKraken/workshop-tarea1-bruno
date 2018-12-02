import { dataDaga, dataMaza, dataSable } from './datos';
import { EfectoAlteracion } from './efectoAlteracion';

class Arma {    
    constructor(
        public readonly tipo: string, 
        public readonly tipoDanio: string, 
        public readonly danio: number,
        public readonly efectoAlteracion: EfectoAlteracion
    ) { }

    toString(): string {
        return ('Arma: ' + this.tipo + '. Tipo de daño: '
        + this.tipoDanio + '. Daño: ' + this.danio + '.\nEfecto: '
        + this.efectoAlteracion.toString());
    }
}

export class Sable extends Arma {
    constructor() {
        super(
            dataSable.tipo,
            dataSable.tipoDanio,
            dataSable.danio,
            EfectoAlteracion.fromDataObject(dataSable.efectoAlteracion)
        );
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