import { ReturnRequest } from "../models/ReturnRequest";

export abstract class RefundCommand {
    protected request: ReturnRequest;

    constructor(request: ReturnRequest) {
        this.request = request;
    }

    abstract execute(): Promise<{ product_id: string, refund_amount: number }>;
}
