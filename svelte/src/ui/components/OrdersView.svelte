<script lang="ts">
    import { formatPrice, Order } from '../../../../vanilla';
    export let orders: Order[];
</script>

<div>
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
        {#each orders as order (order.getId())}
            <tr>
                <td>{order.getId()}</td>
                <td>{order.getStatus()}</td>
                <td>{formatPrice(order.getTotalValue(), order.getCurrency())}</td>
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
                        {#each order.getProducts() as product (product.getId())}
                            <tr>
                                <td>{product.getName()}</td>
                                <td>{product.getQuantity()}</td>
                                <td>{formatPrice(product.getPrice(), order.getCurrency())}</td>
                            </tr>
                        {/each}
                        </tbody>
                    </table>
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>
