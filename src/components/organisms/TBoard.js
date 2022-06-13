import React from 'react';
import TList from '../../containers/templates/TList';
import '../../cards.scss';

const TBoard = () => (
  <div className="todo-container">
    <TList title="やること" categoryId={0} />
    <TList title="完了" categoryId={1} />
  </div>
);

export default TBoard;
