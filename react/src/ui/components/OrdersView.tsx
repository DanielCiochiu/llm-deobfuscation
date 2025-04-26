import React from 'react';
import { formatPrice, OrdersViewProps } from 'js-obfuscation-vanilla';

/**
 * The component that handles rendering the list of orders
 */
export const OrdersView: React.FC<OrdersViewProps> = ({ orders }) => {
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Status</th>
                        <th>Total Value</th>
                        <th>Products</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.getId()}>
                            <td>{order.getId()}</td>
                            <td>{order.getStatus()}</td>
                            <td>{formatPrice(order.getTotalValue(), order.getCurrency())}</td>
                            <td>
                                <table border={1}>
                                    <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {order.getProducts().map(product => (
                                            <tr key={product.getId()}>
                                                <td>{product.getName()}</td>
                                                <td>{product.getQuantity()}</td>
                                                <td>{formatPrice(product.getPrice(), order.getCurrency())}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
