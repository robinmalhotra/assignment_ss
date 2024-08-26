import { RefundCommand } from './RefundCommand';
import { getDaysDiff } from '../utils/DateUtils';

export class ElectronicsRefundCommand extends RefundCommand {
    async execute() {
        const { price, purchase_date, return_date } = this.request;
        const daysSincePurchase = getDaysDiff(purchase_date, return_date);

        if (daysSincePurchase < 0 || !purchase_date || !return_date) {
            return { product_id: this.request.product_id, refund_amount: 0 };
        }

        let refund = 0;

        if (daysSincePurchase <= 30) {
            refund = price * 0.9; // 10% restocking fee
        } else if (daysSincePurchase <= 60) {
            refund = price * 0.5;
        }

        return { product_id: this.request.product_id, refund_amount: refund };
    }
}
