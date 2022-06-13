import React, { useEffect } from 'react';
import TCard from '../molecules/TCard';
import TForm from '../molecules/TForm';
import { getCards,} from '../../http/fetchWebAPI';
import { useTaskCardsContext } from '../../context/taskCardsHook';
import '../../cards.scss';

/* eslint-disable */
const TList = ({ categoryId, title }) => {
  const { state, setState, moveCard } = useTaskCardsContext();
/* eslint-enable */

  useEffect(
    () => {
      (async () => {
        const cardsData = await getCards();
        setState(cardsData);
      })();
    },[setState]);

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


  return (
    // <div onDragOver={preventDefault} onDrop={dropHandler}>
    <div>
      {/* onDropはこの要素の上でドラッグ＆ドロップが終了した際のイベント
        onDragOverはこの要素の上に他の要素がドラッグされた際のイベント */}
      <h4>{title}</h4>
      {/* 指定されたカテゴリーのカードを表示する */}
      <div className="card-container">
        {state
          ? state.filter((card)=>card.category===categoryId)
          .map((card) => <TCard key={card.id} card={card} />)
          : '読込中…'}
        {/* 最後にカード追加用の入力欄を用意 */}
        <TForm categoryId={categoryId} />
      </div>
    </div>
  );
};

export default TList;
