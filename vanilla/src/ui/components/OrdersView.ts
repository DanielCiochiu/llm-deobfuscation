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

        return `<div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Status</th>
                        <th>Total Value</th>
                        <th>Products</th>
                    </tr>
                </thead>
                <tbody>
                    ${orders
                        .map(
                            order => `<tr>
                                <td>${order.getId()}</td>
                                <td>${order.getStatus()}</td>
                                <td>${formatPrice(order.getTotalValue(), order.getCurrency())}</td>
                                <td>
                                    <table border="1">
                                        <thead>
                                            <tr>
                                                <th>Product Name</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${order
                                                .getProducts()
                                                .map(
                                                    product => `<tr>
                                                        <td>${product.getName()}</td>
                                                        <td>${product.getQuantity()}</td>
                                                        <td>${product.getPrice().toFixed(2)} ${order.getCurrency()}</td>
                                                    </tr>`
                                                )
                                                .join('')}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>`
                        )
                        .join('')}
                </tbody>
            </table>
        </div>`;
    }
}
