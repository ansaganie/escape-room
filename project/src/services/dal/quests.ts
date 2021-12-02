import { BackendRoutes } from '../../constants';
import { OrderForm } from '../../models/order-form';
import api from '../api';

const postOrder = async (order: OrderForm): Promise<void> => {
  try {
    await api.post(BackendRoutes.Orders, order);

    return Promise.resolve();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return Promise.reject();
  }
};

export {
  postOrder
};
