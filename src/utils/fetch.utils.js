import axios from 'axios';

const fetchData = async (url) => {
  const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/v2/public`,
    timeout: 10000,
  });

  api.interceptors.response.use(
    (resp) => resp,
    (err) => {
      if (err.response || err.request) {
        return { status: 503 };
      } else {
        console.error('Error: ', err);
      }
    },
  );

  const apiResponse = await api.get(url);

  return apiResponse;
};

export const fetchItem = async ({ itemId }) => {
  const resp = await fetchData(`/items/${itemId}`);
  return resp.data;
};

export const fetchItems = async ({ collectionId, queryString = '' }) => {
  const resp = await fetchData(`/${collectionId}/items${queryString}`);
  return resp;
};
