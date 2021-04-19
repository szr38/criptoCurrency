export class walletClass{
    public amount:number;
    public transaction: string;
    public day:Date;

    constructor(obj :walletInterface){
        this.amount=obj.amount;
        this.transaction=obj.transaction;
        this.day=obj.day;
    }

    // constructor (amount:number, transaction: string, day: Date){
    //     this.amount=amount;
    //     this.transaction=transaction;
    //     this.day=day;
    // }
}

export interface walletInterface{
    amount:number;
    transaction: string;
    day:Date;
}