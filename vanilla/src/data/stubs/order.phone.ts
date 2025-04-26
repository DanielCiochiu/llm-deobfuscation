import { OrderData } from '../OrderData';
import { productIphone } from './product.iphone';
import { productHeadphones } from './product.headphones';
import { productInsurance } from './product.insurance';

export const OrderPhone: OrderData = {
    // the order identifier
    id: 'odasdqwrq',
    // the status of the order
    status: 'shipping',
    // the total value of the order
    total: 1360,
    // the currency of the order
    currency: 'EUR',
    // the list of products for a given order
    products: [productIphone, productHeadphones, productInsurance],
};
