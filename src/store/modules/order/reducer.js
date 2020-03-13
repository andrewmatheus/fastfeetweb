import produce from 'immer';

const INITIAL_STATE = {
  order: null,
  allOrders: [],
};

export default function order(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@order/CREATE_ORDER_SUCCESS': {
        draft.order = action.payload.order;
        break;
      }

      case '@order/LOAD_ALL_ORDERS_SUCCESS': {
        draft.allOrders = action.payload.allOrders;
        break;
      }

      case '@order/UPDATE_ORDER_SUCCESS': {
        draft.order = action.payload.order;
        break;
      }

      case '@order/DELETE_ORDER_SUCCESS': {
        draft.allOrders = draft.allOrders.filter(item => {
          return item.id !== action.payload.id;
        });
        break;
      }

      default:
    }
  });
}
