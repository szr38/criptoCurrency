export class graphicClass {
    public amounts: number[];
    public hour: string[];

    constructor(obj: graphicInterface) {
        this.amounts = obj.amounts;
        this.hour = obj.hour;
    }
}

export interface graphicInterface {
    amounts: number[];
    hour: string[];
}