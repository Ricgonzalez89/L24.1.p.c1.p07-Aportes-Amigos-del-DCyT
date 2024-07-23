export default class Cl_administracion{
    constructor(b5A, b10A, b20A){
        this.billete5Ant = +b5A;
        this.billete10Ant = +b10A;
        this.billete20Ant = +b20A;
        this.acumMontoDia = 0;
        this.acumBi20 = 0;
        this.acumBilleteNue = 0;
    }

    set billete5Ant(b5A){
        this._billete5Ant = +b5A;
    }

    set billete10Ant(b10A){
        this._billete10Ant = +b10A;
    }

    set billete20Ant(b20A){
        this._billete20Ant = +b20A;
    }

    get billete5Ant(){
        return this._billete5Ant;
    }

    get billete10Ant(){
        return this._billete10Ant;
    }

    get billete20Ant(){
        return this._billete20Ant;
    }

    procesarPersona(p){
        this.acumMontoDia += p.calcMontoAporte();
        this.acumBi20 += p.cantBi20;
        this.acumBilleteNue += (p.cantBi5 + p.cantBi10 + p.cantBi20);
    }

    devolverMontoDia(){
        return this.acumMontoDia;
    }

    calcMontoTotal(){
        return (this.acumMontoDia + this.billete5Ant*5 + this.billete10Ant*10 + this.billete20Ant*20);
    }

    calcPorcBi20(){
        if (this.acumBilleteNue > 0)
            return ((this.acumBi20 + this.billete20Ant) / 
                (this.acumBilleteNue+this.billete5Ant+this.billete10Ant+this.billete20Ant)) * 100;
        else
            return 0;
    }
}