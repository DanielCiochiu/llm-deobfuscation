import { ProductData } from './ProductData';

/**
 * Defines the order type
 */
export type OrderData = {
    // the order identifier
    id: string;
    // the status of the order
    status: 'new' | 'processing' | 'shipping' | 'completed' | 'cancelled';
    // the total value of the order
    total: number;
    // the currency of the order
    currency: string;
    // the list of products for a given order
    products: Array<ProductData>;
};
