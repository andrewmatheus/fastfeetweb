import React from 'react';

import { MdAdd } from 'react-icons/md';
import { Button } from './styles';

export default function ButtonRegister({ ...props }) {
  return (
    <Button {...props}>
      <MdAdd className="addOrder" size={22} color="#FFFFFF" />
      CADASTRAR
    </Button>
  );
}
