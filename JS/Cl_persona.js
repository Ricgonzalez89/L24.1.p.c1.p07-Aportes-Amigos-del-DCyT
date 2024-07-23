export default class Cl_persona{
    constructor(c, cB5, cB10, cB20){
        this.cedula = c;
        this.cantBi5 = +cB5;
        this.cantBi10 = +cB10;
        this.cantBi20 = +cB20;
    }

    set cedula(c){
        this._cedula = c;
    }

    set cantBi5(cB5){
        this._cantBi5 = +cB5;
    }

    set cantBi10(cB10){
        this._cantBi10 = +cB10;
    }

    set cantBi20(cB20){
        this._cantBi20 = +cB20;
    }

    get cedula(){
        return this._cedula;
    }

    get cantBi5(){
        return this._cantBi5;
    }

    get cantBi10(){
        return this._cantBi10;
    }

    get cantBi20(){
        return this._cantBi20;
    }

    calcMontoAporte(){
        return (this.cantBi5 * 5 + this.cantBi10 * 10 + this.cantBi20 * 20);
    }
}