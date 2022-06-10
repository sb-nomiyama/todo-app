import React from 'react';

// タスクカード"状態"用カスタムフック
const useTaskCardsState = () => {
  const [state, setState] = React.useState({ cards: [] });

  // タスクカード一覧を"状態"として保存
  const setCardList = (categoryId, cards) => {
    // タスクカードをカテゴリー毎に保存
    state.cards[categoryId] = cards;
    setState({ ...state });
  };
  // タスクカードのカテゴリーを変更
  const moveCard = (card, newCategoryId) => {
    // 変更対象のカードをidを使って探索
    const cardIndex = state.cards[card.categoryId].findIndex(
      ({ id }) => id === card.id,
    );
    console.log(cardIndex);
    // 元の保存先から削除
    state.cards[card.categoryId].splice(cardIndex, 1);
    // 所属するカテゴリーを変更
    // eslint-disable-next-line
    card.categoryId = newCategoryId;
    // 変更先のカテゴリーの要素として追加
    state.cards[newCategoryId].push(card);
    // 変更対象のカードを新しいカードで置き換え
    setState({ ...state });
  };
  // タスクカードを1つ追加
  const addCard = (categoryId, card) => {
    // タスクカードのカテゴリー毎に保存
    console.log(categoryId);
    state.cards[categoryId].push(card);
    setState({ ...state });
  };

  return {
    state,
    setCardList,
    moveCard,
    addCard,
  };
};

// タスクカード用のコンテキスト
const TaskCardsContext = React.createContext();

// カスタムプロパイダーの用意
export const TaskCardsProvider = ({children}) => (
  <TaskCardsContext.Provider value={useTaskCardsState()}>
    {children}
  </TaskCardsContext.Provider>
);

// カスタムフック（コンテキストの取得）の用意
export const useTaskCardsContext = () => React.useContext(TaskCardsContext);
