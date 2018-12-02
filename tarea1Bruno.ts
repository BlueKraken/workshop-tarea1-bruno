interface EfectoAlteracion {
    tipoEfecto: string;
    duracion: number;
    danioPorTurno: number;
    prob: number;
}

class Arma{
    private _tipo: string;
    private _tipoDanio: string;
    private _danio: number;
    private _efectoAlteracion: EfectoAlteracion;
    public get efectoAlteracion(): EfectoAlteracion {
        return this._efectoAlteracion;
    }
    public set efectoAlteracion(value: EfectoAlteracion) {
        this._efectoAlteracion = value;
    }
    
    public get tipo(): string{
        return this._tipo;
    }
    public set tipo(value: string){
        this._tipo = value;
        console.log('set arma');
    }
    public get tipoDanio(): string {
        return this._tipoDanio;
    }
    public set tipoDanio(value: string) {
        this._tipoDanio = value;
    }
    public get danio(): number {
        return this._danio;
    }
    public set danio(value: number) {
        this._danio = value;
    }

    toString(): void{
        console.log('Arma: ' + this._tipo + '. Tipo de daño: ' + this._tipoDanio + '. Daño: ' + this._danio + '.\nEfecto: ' + (this._efectoAlteracion.prob * 100) + '% de probabilidades de causar ' + this._efectoAlteracion.tipoEfecto + ' durante ' + this._efectoAlteracion.duracion + ' turnos causando ' + this._efectoAlteracion.danioPorTurno + ' de daño por turno');
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
        super();
        this.tipo = dataSable.tipo;
        this.tipoDanio = dataSable.tipoDanio;
        this.danio = dataSable.danio;
        this.efectoAlteracion = dataSable.efectoAlteracion;
    }

}

class Daga extends Arma{

    constructor(){
        super();
        this.tipo = dataDaga.tipo;
        this.tipoDanio = dataDaga.tipoDanio;
        this.danio = dataDaga.danio;
        this.efectoAlteracion = dataDaga.efectoAlteracion;
    }

}

class Maza extends Arma{
    constructor(){
        super();
        this.tipo = dataMaza.tipo;
        this.tipoDanio = dataMaza.tipoDanio;
        this.danio = dataMaza.danio;
        this.efectoAlteracion = dataMaza.efectoAlteracion;
    }

}

let miSable = new Sable();
miSable.toString();
miSable.tipo = 'saable';
miSable.toString();