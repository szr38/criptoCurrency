export class criptomoneyClass {
    public amount: number;
    public transaction: string;
    public day: Date;
    public quantityCripto: number;
    public typeMoney: number;

    constructor(obj: criptomoneyInterface) {
        this.amount = obj.amount;
        this.transaction = obj.transaction;
        this.day = obj.day;
        this.quantityCripto = obj.quantityCripto;
        this.typeMoney = obj.typeMoney;
    }
}

export interface criptomoneyInterface {
    amount: number;
    transaction: string;
    day: Date;
    quantityCripto: number;
    typeMoney: number;
}