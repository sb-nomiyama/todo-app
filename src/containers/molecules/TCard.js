import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { getCards, deleteCard } from '../../http/fetchWebAPI';
import { useTaskCardsContext } from '../../context/taskCardsHook';
import '../../cards.scss';
import TUpdateForm from './TUpdateForm';

const TCard = ({ card }) => {
  const { setState } = useTaskCardsContext();
  const [editable, setEditable] = useState(false);

  // const dragStart = (event) => {
  //   // ドラッグされているカードの情報を記録
  //   event.dataTransfer.setData('text/plain', JSON.stringify(card));
  // };

  const deleteAction = (item) => {
    (async () => {
      await deleteCard({
        id: item.id,
      });
      // あんまり美しくないよね？
      const cardsData = await getCards();
      setState(cardsData);
    })();
  };

  const changeEditMode = () => {
    setEditable(!editable);
  };


  return (
    <Card className="card-item">
      <CardContent>
        {editable ? (
          <>
            <button
              type="submit"
              className="edit-icon"
              onClick={changeEditMode}
            >
              <span className="material-icons">close</span>
            </button>
            <TUpdateForm card={card} setEditable={setEditable}/>
          </>
        ) : (
          <>
            <button
              type="submit"
              className="edit-icon"
              onClick={changeEditMode}
            >
              <span className="material-icons">edit</span>
            </button>
            <h3>{card.title}</h3>
            <p className="content">{card.content}</p>
            <div className="card-options">
              <button
                type="submit"
                className="edit-icon"
                onClick={() => deleteAction(card)}
              >
                <span className="material-icons">delete</span>
              </button>
              <p className="created-date">{card.createdAt}</p>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default TCard;
