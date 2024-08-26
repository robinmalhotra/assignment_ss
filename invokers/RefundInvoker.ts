import { RefundCommand } from '../commands/RefundCommand';

export class RefundInvoker {
    private command: RefundCommand;

    constructor(command: RefundCommand) {
        this.command = command;
    }

    async processRefund() {
        return await this.command.execute();
    }
}
