import React from 'react';

import { MdSearch } from 'react-icons/md';
import { Input } from './styles';

export default function InputSearch({ ...props }) {
  return (
    <Input>
      <MdSearch className="iconSearch" size={16} color="#999999" />
      <input className="inputSearch" {...props} />
    </Input>
  );
}
