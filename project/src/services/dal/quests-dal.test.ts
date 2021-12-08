import MockAdapter from 'axios-mock-adapter';
import { BackendRoute } from '../../constants';
import api from '../api';
import { OrderForm } from '../../models/order-form';
import { postOrder } from './quests-dal';

const axios = new MockAdapter(api);

describe('DAL: Quests', () => {
  it('should post order', async () => {
    const fakeOrder: OrderForm = {
      isLegal: true,
      name: 'name',
      peopleCount: 5,
      phone: '5646545645',
    };

    axios
      .onPost(BackendRoute.Orders)
      .reply(200);

    const response = await postOrder(fakeOrder);

    expect(response).toBeUndefined();
  });
});
