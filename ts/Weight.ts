export class Weight{
    private _pesos: number[];

    constructor(pesos: number[]){
        this._pesos = pesos;
    }

    get pesos(): number[]{
        return this._pesos
    }

    set pesos(pesos: number[]){
        if(pesos.length > 5){
            console.log("Vai tomar no cu")
        }
        this._pesos = pesos;
    }

}