import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';
import logo from '~/assets/fastfeetheader.svg';

import { Container, Content } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} width="145" alt="FastFeet" />

          <span />

          <NavLink
            className="order"
            activeStyle={{ color: '#444' }}
            to="/orders"
          >
            ENCOMENDAS
          </NavLink>
          <NavLink
            className="courier"
            activeStyle={{ color: '#444' }}
            to="/couriers"
          >
            ENTREGADORES
          </NavLink>
          <NavLink
            className="recipient"
            activeStyle={{ color: '#444' }}
            to="/recipients"
          >
            DESTINATÁRIOS
          </NavLink>
          <NavLink
            className="problem"
            activeStyle={{ color: '#444' }}
            to="/delivery/problems"
          >
            PROBLEMAS
          </NavLink>
        </nav>

        <aside>
          <h1>Admin FastFeet</h1>
          <Link to="/" onClick={handleSignOut}>
            sair do sistema
          </Link>
        </aside>
      </Content>
    </Container>
  );
}
