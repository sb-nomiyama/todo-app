import React from 'react';

const useTaskCardsState = () => {
  const [state, setState] = React.useState([]);
  
  const moveCard = (card, newCategoryId) => {
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

  return {
    state,
    setState,
    moveCard,
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
