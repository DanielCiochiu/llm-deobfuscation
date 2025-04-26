import { CustomElement } from '../CustomElement';
import { Order } from '../../models/Order';
import { formatPrice } from '../../helpers/formatters';

/**
 * Exporting the OrdersViewProps
 */
export type OrdersViewProps = {
    orders: Array<Order>;
};

/**
 * The class that handles rendering the list of orders
 */
export class OrdersView extends CustomElement<OrdersViewProps> {
    static element = 'orders-view';

    /**
     * The template method that shows the list of orders
     */
    template(): string {
        const orders = this.props.orders;

        return `
        <ul>
            ${orders
                .map(
                    order => `<li>
                        <strong>Order ID:</strong> ${order.getId()} <br />
                        <strong>Status:</strong> ${order.getStatus()} <br />
                        <strong>Total Value:</strong> ${formatPrice(order.getTotalValue(), order.getCurrency())} <br />
                        <strong>Products:</strong>
                        <ul>
                            ${order
                                .getProducts()
                                .map(
                                    product => `<li>
                                        <strong>Product Name:</strong> ${product.getName()} <br />
                                        <strong>Quantity:</strong> ${product.getQuantity()} <br />
                                        <strong>Price:</strong> ${product.getPrice().toFixed(2)} ${order.getCurrency()}
                                    </li>`
                                )
                                .join('')}
                        </ul>
                    </li>`
                )
                .join('')}
        </ul>
    `;
    }
}
