import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  createOrderSuccess,
  createOrderFailure,
  loadAllOrdersSuccess,
  loadAllOrdersFailure,
  updateOrderSuccess,
  updateOrderFailure,
  deleteOrderSuccess,
  deleteOrderFailure,
} from './actions';

export function* createOrder({ payload }) {
  try {
    const response = yield call(api.post, '/orders', payload);

    toast.success('Sua encomenda foi criada com sucesso!');

    yield put(createOrderSuccess(response.data));

    history.push('/orders');
  } catch (error) {
    toast.error(
      'Houve algum problema ao criar sua encomenda, tente novamente.'
    );
    yield put(createOrderFailure());
    history.push('/orders');
  }
}

export function* loadOrders() {
  try {
    const response = yield api.get('orders');

    if (response) {
      yield put(loadAllOrdersSuccess(response.data));
    }
  } catch (error) {
    if (error.response.status === 400) {
      toast.warn('Você não possui encomendas.');
    }
    yield put(loadAllOrdersFailure());
  }
}

export function* updateOrder({ payload }) {
  try {
    const {
      recipient_id,
      deliveryman_id,
      signature_id,
      product,
      canceled_at,
      start_date,
      end_date,
      id,
    } = payload;

    const data = {
      recipient_id,
      deliveryman_id,
      signature_id,
      product,
      canceled_at,
      start_date,
      end_date,
    };

    const response = yield call(api.put, `/orders/${id}`, data);
    toast.success('Encomenda atualizada com sucesso.');

    yield put(updateOrderSuccess(response.data));

    history.push('/orders');
  } catch (error) {
    toast.error(
      'Houve algum erro ao atualizar sua encomenda, verifique seus dados.'
    );
    yield put(updateOrderFailure());
  }
}

export function* deleteOrder({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.delete, `/orders/${id}`);

    if (response) {
      toast.warn('Sua encomenda foi cancelada com sucesso!');
    } else {
      toast.error(
        'Houve algum problema ao cancelar sua encomenda, tente novamente.'
      );
    }

    yield put(deleteOrderSuccess(response.data));

    history.push('/orders');
  } catch (error) {
    yield put(deleteOrderFailure());
  }
}

export default all([
  takeLatest('@order/CREATE_ORDER_REQUEST', createOrder),
  takeLatest('@order/LOAD_ALL_ORDERS_REQUEST', loadOrders),
  takeLatest('@order/UPDATE_ORDER_REQUEST', updateOrder),
  takeLatest('@order/DELETE_ORDER_REQUEST', deleteOrder),
]);
