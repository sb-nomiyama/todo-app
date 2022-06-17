import { useState } from 'react';
import { TextField, CardActions, Button, Checkbox } from '@mui/material';
import { getCards, putCard } from '../../http/fetchWebAPI';
import { useTaskCardsContext } from '../../context/taskCardsHook';

const TUpdateForm = ({ card, setEditable }) => {
  const [text, setText] = useState(card.title);
  const [subText, setSubText] = useState(card.content);
  // eslint-disable-next-line
  const [category, setCategory] = useState(card.category);
  const { setState } = useTaskCardsContext();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleContentInputChange = (e) => {
    setSubText(e.target.value);
  };

  const handleCheckBox = () => {
    // 0 or 1のschemaにすればよかった
    setCategory(Math.abs(category - 1));
    
    // setCategory((state)=>Math.abs(state-1));
    // console.log(category)
  };

  const handleUpdateCard = () => {
    (async () => {
      await putCard({
        id: card.id,
        category,
        title: text,
        content: subText,
      });
      // あんまり美しくないよね？
      const cardsData = await getCards();
      setState(cardsData);
      setEditable((state) => !state);
    })();
  };

  return (
    <>
      <TextField
        onInput={handleInputChange}
        id="outlined-basic"
        label="Title"
        variant="outlined"
        defaultValue={text}
        className="card-title-form"
      />
      <TextField
        onInput={handleContentInputChange}
        id="outlined-basic"
        label="Content"
        variant="outlined"
        defaultValue={subText}
        className="card-title-form"
      />
      <CardActions className="card-options">
        <Checkbox onClick={handleCheckBox} checked={!!category} />
        <Button onClick={handleUpdateCard} variant="contained">
          カードの更新
        </Button>
      </CardActions>
    </>
  );
};

export default TUpdateForm;
