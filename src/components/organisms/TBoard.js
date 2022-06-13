import React from 'react';
import TList from '../../containers/templates/TList';
import '../../cards.scss';

const TBoard = () => (
  <div className="todo-container">
    <TList title="ToDo!" categoryId={0} />
    <TList title="Done!" categoryId={1} />
  </div>
);

export default TBoard;
