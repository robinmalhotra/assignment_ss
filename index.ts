import { ReturnRequest } from './models/ReturnRequest';
import { RefundInvoker } from './invokers/RefundInvoker';
import { ElectronicsRefundCommand } from './commands/ElectronicsRefundCommand';
import { ClothingRefundCommand } from './commands/ClothingRefundCommand';
import { HomeAppliancesRefundCommand } from './commands/HomeAppliancesRefundCommand';

async function processReturnRequests(returnRequests: ReturnRequest[]) {
    const processedRequests = [];

    for (let request of returnRequests) {
        if (!request.product_id || !request.category || !request.price) {
            console.error(`Invalid request: Missing fields in ${JSON.stringify(request)}`);
            processedRequests.push({ product_id: request.product_id, refund_amount: 0 });
            continue;
        }

        let command;

        switch (request.category.toLowerCase()) {
            case 'electronics':
                command = new ElectronicsRefundCommand(request);
                break;
            case 'clothing':
                command = new ClothingRefundCommand(request);
                break;
            case 'home appliances':
                command = new HomeAppliancesRefundCommand(request);
                break;
            default:
                console.error(`Unknown category: ${request.category}`);
                processedRequests.push({ product_id: request.product_id, refund_amount: 0 });
                continue;
        }

        const invoker = new RefundInvoker(command);
        const result = await invoker.processRefund();
        processedRequests.push(result);
    }

    return processedRequests;
}

// Example usage
const input: ReturnRequest[] = [
    {
        product_id: 'P123',
        category: 'electronics',
        purchase_date: '2023-01-01',
        return_date: '2023-01-15',
        return_reason: 'defective',
        price: 1000,
    },
    {
        product_id: 'P124',
        category: 'clothing',
        purchase_date: '2023-01-01',
        return_date: '2023-02-15',
        return_reason: 'changed mind',
        price: 200,
    },
    {
        product_id: 'P125',
        category: 'home appliances',
        purchase_date: '2023-01-01',
        return_date: '2023-03-01',
        return_reason: 'not as described',
        price: 500,
    },
    {
        product_id: 'P126',
        category: 'unknown',
        purchase_date: '2023-01-01',
        return_date: '2023-02-01',
        return_reason: 'unknown',
        price: 300,
    },
];

processReturnRequests(input).then(console.log);
