import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { Container, ListOrders } from './styles';

import {
  deleteOrderRequest,
  loadAllOrdersRequest,
} from '../../store/modules/order/actions';

import ButtonRegister from '~/components/ButtonRegister';
import InputSearch from '~/components/InputSearch';
import Status from '~/components/Status';

export default function Orders() {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.order.allOrders);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(loadAllOrdersRequest());
  }, []); // eslint-disable-line

  useEffect(() => {
    if (search !== null) {
      dispatch(loadAllOrdersRequest(search, null));
    }
  }, [search]); // eslint-disable-line

  async function handleDelete(id) {
    const result = window.confirm( // eslint-disable-line
      'Tem certeza que deseja cancelar esta encomenda?'
    );
    if (result) {
      dispatch(deleteOrderRequest(id));
    }
  }

  return (
    <Container>
      <header>
        <h1 className="title">Gerenciando encomendas</h1>

        <div className="actions">
          <InputSearch
            checked={search}
            onChange={e => setSearch(e.target.value)}
            type="search"
            name="searchOrders"
            id="searchOrder"
            placeholder="Buscar por encomendas"
          />

          <ButtonRegister type="submit" />
        </div>
      </header>

      <ListOrders>
        <table>
          <thead>
            <tr className="tableHead">
              <th>ID</th>
              <th>Destinatário</th>
              <th>Entregador</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.recipient.name}</td>
                <td>{order.deliveryman.name}</td>
                <td>{order.recipient.city}</td>
                <td>{order.recipient.state}</td>
                <td>
                  <Status data={(order.canceled_at, order.end_date)} />
                </td>
                <td>
                  <div>
                    <Link
                      to={{
                        pathname: `/orders/view/${order.id}`,
                      }}
                    >
                      Visualizar
                    </Link>
                    <Link
                      to={{
                        pathname: `/orders/update/${order.id}`,
                      }}
                    >
                      Editar
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDelete(order.id)}
                    >
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ListOrders>
    </Container>
  );
}
