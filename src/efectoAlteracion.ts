export class EfectoAlteracion {
    constructor(
        public readonly tipoEfecto: string,
        public readonly duracion: number,
        public readonly danioPorTurno: number,
        public readonly prob: number
    ) { }

    static fromDataObject(dataObject): EfectoAlteracion {
        return new EfectoAlteracion(
            dataObject.tipoEfecto,
            dataObject.duracion,
            dataObject.danioPorTurno,
            dataObject.prob
        );
    }

    public toString(): string {
        return (this.prob * 100) + '% de probabilidades de causar '
            + this.tipoEfecto + ' durante '
            + this.duracion + ' turnos causando '
            + this.danioPorTurno + ' de daño por turno';
    }
}