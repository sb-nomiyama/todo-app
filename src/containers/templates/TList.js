import React from 'react';
import TCard from '../molecules/TCard';
import TForm from '../molecules/TForm';
// import { getCards, putCard } from '../http/fetchWebAPI';
import { useTaskCardsContext } from '../../context/taskCardsHook';

// TListコンポーネント
/* eslint-disable */
const TList = ({ categoryId, title }) => {
  const { state, setCardList, moveCard } = useTaskCardsContext();
  console.log(state);
  const cardList = state.cards[categoryId];
  // リストにカードがドロップされた時のハンドラー
  // const dropHandler = (event) => {
  //   // ドラッグされていたカードの情報を取得
  //   const cardTextPlain = event.dataTransfer.getData('text/plain');
  //   const card = JSON.parse(cardTextPlain);
  //   // カードを更新
  //   (async () => {
  //     await putCard({ ...card, categoryId });
  //     moveCard(card, categoryId);
  //   })();
  // };
  // // ドロップされる前にデフォルトの動きを抑制しないとドロップイベントが起きない
  // const preventDefault = (event) => {
  //   event.preventDefault();
  // };
  // useEffect(
  //   () => {
  //     (async () => {
  //       // カード一覧をWebAPIより取得
  //       const cardsData = await getCards(categoryId);
  //       // Context内の状態：カード一覧を更新
  //       setCardList(categoryId, cardsData);
  //     })();
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [],
  // );

  return (
    // <div onDragOver={preventDefault} onDrop={dropHandler}>
    <div>
      {/* onDropはこの要素の上でドラッグ＆ドロップが終了した際のイベント
        onDragOverはこの要素の上に他の要素がドラッグされた際のイベント */}
      <h4>{title}</h4>
      {/* 指定されたカテゴリーのカードを表示する */}
      {cardList
        ? cardList.map((card) => <TCard key={card.id} card={card} />)
        : '読込中…'}
      {/* 最後にカード追加用の入力欄を用意 */}
      <TForm categoryId={categoryId} />
    </div>
  );
};

export default TList;
