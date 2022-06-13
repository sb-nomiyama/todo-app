const fetchWebAPI = async (method, url, data) => {
  const fetchOptions = {
    method,
    headers: { 'Content-Type': 'application/json' },
  };
  if (data) fetchOptions.body = JSON.stringify(data);
  
  const response = await window.fetch(url, fetchOptions);
  if (!response.ok) {
    throw Error(`ERROR:${response.status} ${response.statusText}`);
  }
  if (response.status===201 || response.status===204){
    return null
  }
  const result = await response.json();

  return result;
};

const CARDS_URL = '/todo';


export const putCard = async (data) => fetchWebAPI('PUT', CARDS_URL, data);

export const postCard = async (data) => fetchWebAPI('POST', CARDS_URL, data);

export const getCards = async () => fetchWebAPI('GET', CARDS_URL);

export const deleteCard = async (data) => fetchWebAPI('DELETE', CARDS_URL, data);
