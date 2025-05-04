export class Weight {
    constructor(pesos) {
        this._pesos = pesos;
    }
    get pesos() {
        return this._pesos;
    }
    set pesos(pesos) {
        if (pesos.length > 5) {
            console.log("Vai tomar no cu");
        }
        this._pesos = pesos;
    }
}
