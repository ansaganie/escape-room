import { AxiosError } from 'axios';
import appToast from '../../packages/app-toast';
import api from '../api';
import { BackendRoute } from '../../constants';
import { OrderForm } from '../../models/order-form';

const POST_ORDER_PENDING = 'Обрабатываем вашу заявку...';
const POST_ORDER_SUCCESS = 'Успешно получили вашу заявку. Скоро с вами свяжемся';

const postOrder = async (order: OrderForm): Promise<void> => {
  const toastId = appToast.pending(POST_ORDER_PENDING);

  try {
    await api.post(BackendRoute.Orders, order);
    appToast.success(POST_ORDER_SUCCESS);

    return Promise.resolve();
  } catch (error) {
    appToast.error(
      (error as AxiosError).response?.data?.messages[0],
    );

    return Promise.reject();
  } finally {
    appToast.remove(toastId);
  }
};

export { postOrder };
