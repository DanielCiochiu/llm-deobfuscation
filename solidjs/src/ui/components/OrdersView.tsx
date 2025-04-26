import { Order, formatPrice } from '../../../../vanilla';

export default function OrdersView(props: { orders: Order[] }) {
    return (
        <div>
            {/* @ts-ignore */}
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
                    {props.orders.map(order => (
                        <tr>
                            <td>{order.getId()}</td>
                            <td>{order.getStatus()}</td>
                            <td>{formatPrice(order.getTotalValue(), order.getCurrency())}</td>
                            <td>
                                {/* @ts-ignore */}
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
                                            <tr>
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
}
