import { RefundCommand } from './RefundCommand';
import { getDaysDiff } from '../utils/DateUtils';

export class HomeAppliancesRefundCommand extends RefundCommand {
    async execute() {
        const { price, purchase_date, return_date } = this.request;
        const daysSincePurchase = getDaysDiff(purchase_date, return_date);

        if (daysSincePurchase < 0 || !purchase_date || !return_date) {
            return { product_id: this.request.product_id, refund_amount: 0 };
        }

        let refund = 0;

        if (daysSincePurchase <= 45) {
            refund = price; // Full refund within 45 days
        }

        return { product_id: this.request.product_id, refund_amount: refund };
    }
}
