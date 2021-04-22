export class criptomoneyClass {
    public amount: number;
    public transaction: string;
    public day: Date;
    public quantityMoney: number;
    public money: number;

    constructor(obj: criptomoneyInterface) {
        this.amount = obj.amount;
        this.transaction = obj.transaction;
        this.day = obj.day;
        this.quantityMoney = obj.quantityMoney;
        this.money = obj.money;
    }
}

export interface criptomoneyInterface {
    amount: number;
    transaction: string;
    day: Date;
    quantityMoney: number;
    money: number;
}