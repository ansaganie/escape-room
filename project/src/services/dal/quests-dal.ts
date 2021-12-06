import { AxiosError } from 'axios';
import appToast from '../../packages/app-toast';
import api from '../api';
import { BackendRoutes } from '../../constants';
import { OrderForm } from '../../models/order-form';

const POST_ORDER_PENDING = 'Обрабатываем вашу заявку...';
const POST_ORDER_SUCCESS = 'Успешно получили вашу заявку. Скоро с вами свяжемся';

const postOrder = async (order: OrderForm): Promise<void> => {
  appToast.pending(POST_ORDER_PENDING);

  try {
    await api.post(BackendRoutes.Orders, order);
    appToast.success(POST_ORDER_SUCCESS);
    // eslint-disable-next-line no-debugger
    debugger;
    return Promise.resolve();
  } catch (error) {
    appToast.error((error as AxiosError).response?.data);
    // eslint-disable-next-line no-debugger
    debugger;
    return Promise.reject();
  }
};

export { postOrder };
