interface EfectoAlteracion {
    tipoEfecto: string;
    duracion: number;
    danioPorTurno: number;
    prob: number;
}

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

const dataSable = {
    tipo: 'sable',
    tipoDanio: 'cortante',
    danio: 10,
    efectoAlteracion: {
        tipoEfecto: 'sangrado',
        duracion: 3,
        danioPorTurno: 5,
        prob: 0.2
    }
}

const dataDaga = {
    tipo: 'daga',
    tipoDanio: 'punzante',
    danio: 7,
    efectoAlteracion: {
        tipoEfecto: 'sangrado',
        duracion: 4,
        danioPorTurno: 2,
        prob: 0.4
    }
}

const dataMaza = {
    tipo: 'maza',
    tipoDanio: 'contundente',
    danio: 14,
    efectoAlteracion: {
        tipoEfecto: 'aturdimiento',
        duracion: 2,
        danioPorTurno: 0,
        prob: 0.08
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