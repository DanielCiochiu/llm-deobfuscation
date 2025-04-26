import { OrderData } from '../data/OrderData';
import { Product } from './Product';

/**
 * The class that implements the order model
 */
export class Order {
    private products: Array<Product> = [];

    constructor(private data: OrderData) {
        this.data.products.forEach(product => {
            this.products.push(new Product(product));
        });
    }

    /**
     * Returns the order identifier
     */
    getId(): string {
        return this.data.id;
    }

    /**
     * Returns the status of the order
     */
    getStatus(): string {
        return this.data.status;
    }

    /**
     * Returns the total value for the order
     */
    getTotalValue(): number {
        return this.data.total;
    }

    /**
     * Returns the currency in which the order was placed
     */
    getCurrency(): string {
        return this.data.currency;
    }

    /**
     * Returns the order products
     */
    getProducts(): Array<Product> {
        return this.products;
    }
}
