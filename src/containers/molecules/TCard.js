import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const TCard = ({card}) => {
  const dragStart = (event) => {
    // ドラッグされているカードの情報を記録
    event.dataTransfer.setData('text/plain', JSON.stringify(card));
  };

  return (
    <Card onDragStart={dragStart} draggable>
      <CardContent>
        <Typography>{card.text}</Typography>
      </CardContent>
    </Card>
  );
};

export default TCard;
