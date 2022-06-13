import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextField
} from '@mui/material';
import { getCards, postCard } from '../../http/fetchWebAPI';
import { useTaskCardsContext } from '../../context/taskCardsHook';

const TForm = ({ categoryId }) => {
  const [text, setText] = useState('');
  const [subText, setSubText] = useState('');
  const { setState } = useTaskCardsContext();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleContentInputChange = (e) => {
    setSubText(e.target.value);
  };
  const handleAddCard = () => {
    if (text) {
      (async () => {
        await postCard({
          category:categoryId,
          title:text,
          content:subText
        });
        // あんまり美しくないよね？
        const cardsData = await getCards();
        setState(cardsData);
      })();
    }
  };

  return (
    <div>
      <Card className='card-item'>
        <CardContent>
          <TextField onInput={handleInputChange} id="outlined-basic" label="Title" variant="outlined" className='card-title-form'/>
          <TextField onInput={handleContentInputChange} id="outlined-basic" label="Content" variant="outlined" className='card-title-form'/>
        </CardContent>
        <CardActions>
          <Button onClick={handleAddCard} variant="contained">
            カードの追加
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default TForm;
