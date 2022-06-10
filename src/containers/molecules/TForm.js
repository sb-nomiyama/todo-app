import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextareaAutosize,
} from '@mui/material';
// import { postCard } from '../http/fetchWebAPI';
/* eslint-disable */
import { useTaskCardsContext } from '../../context/taskCardsHook';


const TForm = ({ categoryId }) => {
  const [text, setText] = useState('');
  const { addCard } = useTaskCardsContext();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  // const handleAddCard = () => {
  //   if (text) {
  //     (async () => {
  //       // カードを追加
  //       const newCard = await postCard({
  //         text,
  //         categoryId,
  //       });
  //       addCard(categoryId, newCard);
  //     })();
  //   }
  // };

  return (
    <div>
      <Card>
        <CardContent>
          <TextareaAutosize autoFocus onInput={handleInputChange} />
        </CardContent>
        <CardActions>
          {/* <Button onMouseDown={handleAddCard} variant="contained"> */}
          <Button variant="contained">
            カードの追加
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default TForm;
