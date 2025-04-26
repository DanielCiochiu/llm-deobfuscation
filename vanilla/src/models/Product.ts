import { ProductData } from '../data/ProductData';

/**
 * The class that implements the product model
 */
export class Product {
    constructor(private data: ProductData) {}

    /**
     * Returns the identifier for this product
     */
    getId(): string {
        return this.data.id;
    }

    /**
     * Returns the name of the product
     */
    getName(): string {
        return this.data.name;
    }

    /**
     * Returns the price for this product
     */
    getPrice(): number {
        return this.data.price;
    }

    /**
     * Returns the quantity for this product
     */
    getQuantity(): number {
        return this.data.quantity;
    }
}
