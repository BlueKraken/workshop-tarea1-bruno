import { dataDaga, dataMaza, dataSable } from './datos';
import { EfectoAlteracion } from './efectoAlteracion';

class Arma{
    public readonly tipo: string;
    public readonly tipoDanio: string;
    public readonly danio: number;
    public readonly efectoAlteracion: EfectoAlteracion;
    
    constructor(tipo: string, tipoDanio, danio: number, efectoAlteracion: EfectoAlteracion) {
        this.tipo = tipo;
        this.danio = danio;
        this.efectoAlteracion = efectoAlteracion;
    }

    toString(): void{
        console.log('Arma: ' + this.tipo + '. Tipo de daño: ' + this.tipoDanio + '. Daño: ' + this.danio + '.\nEfecto: ' + (this.efectoAlteracion.prob * 100) + '% de probabilidades de causar ' + this.efectoAlteracion.tipoEfecto + ' durante ' + this.efectoAlteracion.duracion + ' turnos causando ' + this.efectoAlteracion.danioPorTurno + ' de daño por turno');
    }
}

class Sable extends Arma{
    constructor(){
        super(
            dataSable.tipo,
            dataSable.tipoDanio,
            dataSable.danio,
            dataSable.efectoAlteracion);
    }

}

class Daga extends Arma{

    constructor(){
        super(
            dataDaga.tipo,
            dataDaga.tipoDanio,
            dataDaga.danio,
            dataDaga.efectoAlteracion);
    }

}

class Maza extends Arma{
    constructor(){
        super(
            dataMaza.tipo,
            dataMaza.tipoDanio,
            dataMaza.danio,
            dataMaza.efectoAlteracion);
    }

}

let miSable = new Sable();
miSable.toString();
//miSable.tipo = 'saable';
miSable.toString();