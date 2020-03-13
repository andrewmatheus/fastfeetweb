import React from 'react';

// import { Container } from './styles';

export default function Status(data) {
  function handleStatus(dateCancel, dateEnd) {
    let status = 'PENDENTE';
    console.log(dateCancel, dateEnd);
    if (dateCancel !== null && dateEnd !== null) {
      status = 'RETIRADA';
    } else if (dateCancel !== null && dateEnd === null) {
      status = 'CANCELADA';
    } else if (dateCancel === null && dateEnd !== null) {
      status = 'ENTREGUE';
    }

    return status;
  }
  console.log(data);

  return (
    <div>
      <span />
      {handleStatus(data.canceled_at, data.end_date)}
    </div>
  );
}
