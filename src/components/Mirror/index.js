import React from 'react';
import { useCount } from '../../context/Count';

// import { Container } from './styles';

function Mirror() {
  const { count } = useCount();

  return (
    <span>
      <b>Mirror: </b>
      {count}
    </span>
  )
}

export default Mirror;