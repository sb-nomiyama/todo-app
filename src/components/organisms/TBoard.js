import React from 'react';
import TList from '../../containers/templates/TList';

const TBoard = () => (
  <div>
    <TList title="やること" categoryId={1} />
    <TList title="完了" categoryId={2} />
  </div>
);

export default TBoard;
