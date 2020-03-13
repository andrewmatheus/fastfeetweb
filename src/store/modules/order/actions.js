export function createOrderRequest(
  recipient_id,
  deliveryman_id,
  signature_id,
  product,
  start_date
) {
  return {
    type: '@order/CREATE_ORDER_REQUEST',
    payload: {
      recipient_id,
      deliveryman_id,
      signature_id,
      product,
      start_date,
    },
  };
}

export function createOrderSuccess(order) {
  return {
    type: '@order/CREATE_ORDER_SUCCESS',
    payload: { order },
  };
}

export function loadAllOrdersRequest() {
  return {
    type: '@order/LOAD_ALL_ORDERS_REQUEST',
  };
}

export function loadAllOrdersSuccess(allOrders) {
  return {
    type: '@order/LOAD_ALL_ORDERS_SUCCESS',
    payload: { allOrders },
  };
}

export function loadAllOrdersFailure() {
  return {
    type: '@order/LOAD_ALL_ORDERS_FAILURE',
  };
}

export function createOrderFailure() {
  return {
    type: '@order/CREATE_ORDER_FAILURE',
  };
}

export function updateOrderRequest(
  recipient_id,
  deliveryman_id,
  signature_id,
  product,
  canceled_at,
  start_date,
  end_date,
  id
) {
  return {
    type: '@order/UPDATE_ORDER_REQUEST',
    payload: {
      recipient_id,
      deliveryman_id,
      signature_id,
      product,
      canceled_at,
      start_date,
      end_date,
      id,
    },
  };
}

export function updateOrderSuccess(order) {
  return {
    type: '@order/UPDATE_ORDER_SUCCESS',
    payload: { order },
  };
}

export function updateOrderFailure() {
  return {
    type: '@order/UPDATE_ORDER_FAILURE',
  };
}

export function deleteOrderRequest(id) {
  return {
    type: '@order/DELETE_ORDER_REQUEST',
    payload: { id },
  };
}

export function deleteOrderSuccess(id) {
  return {
    type: '@order/DELETE_ORDER_SUCCESS',
    payload: { id },
  };
}

export function deleteOrderFailure() {
  return {
    type: '@order/DELETE_ORDER_FAILURE',
  };
}
