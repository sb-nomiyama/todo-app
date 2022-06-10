// HTTP通信用共通関数
const fetchWebAPI = async (method, url, data) => {
  // HTTP通信用のオプションオブジェクトを用意
  const fetchOptions = {
    method,
    headers: { 'Content-Type': 'application/json' },
  };
  // POSTやPUTでデータを送信したい場合、オプションオブジェクトに追加
  if (data) fetchOptions.body = JSON.stringify(data);

  // 引数urlをアクセス先として通信
  const response = await window.fetch(url, fetchOptions);
  // レスポンスが'OK'(status code:200)でなければエラーとして処理する
  if (!response.ok) {
    throw Error(`ERROR:${response.status} ${response.statusText}`);
  }
  const result = await response.json();

  return result;
};

const CARDS_URL = 'http://localhost:8080/cards/';
const CATEGORIES_URL = 'http://localhost:8080/categories/';

// 対象のカードを更新
export const putCard = async (data) =>
  fetchWebAPI('PUT', CARDS_URL + data.id, data);

// カードを追加する関数
export const postCard = async (data) => fetchWebAPI('POST', CARDS_URL, data);

// カード一覧をWebAPIからカテゴリーごとに取得する関数
export const getCards = async (categoryId) =>
  fetchWebAPI('GET', `${CATEGORIES_URL + categoryId}/cards`);
