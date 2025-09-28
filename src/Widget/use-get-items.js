import React, { useEffect, useState } from 'react';
import { fetchItem, fetchItems } from '../utils/fetch.utils';

const useGetItems = ({
  collectionId,
  itemsIsArray = false,
  widgetNumberOfItems,
  widgetQuery = '',
  widgetStaticItems = [],
}) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const itemIds =
    !itemsIsArray && widgetStaticItems?.length > 0
      ? widgetStaticItems?.split(',')
      : widgetStaticItems;

  const queryString =
    widgetQuery?.length > 0 ? `${widgetQuery}&limit=${widgetNumberOfItems}` : null;

  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      try {
        if (itemIds?.length > 0) {
          const items = await Promise.all(itemIds.map((itemId) => fetchItem({ itemId })));
          setItems(items);
          setLoading(false);
        } else {
          const { data } = await fetchItems({ collectionId, queryString });
          setItems(data.documents);
          setLoading(false);
        }
      } catch (err) {
        console.error('Error fetching widget items', err);
      }
    };
    getItems();
  }, [queryString, setItems]);

  return { items, loading };
};

export default useGetItems;
