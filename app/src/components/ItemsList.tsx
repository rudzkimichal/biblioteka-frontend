import { List, ListItem } from '@mui/material';
import { useFetchItems } from '../hooks/useFetchItems';

import { Item } from './ItemsList.interfaces';

export const ItemsList = () => {
  const { data, isPending, isError, error } = useFetchItems();

  return (
    <List>
      {isPending && <div>Loading...</div>}
      {isError && error && <div>Error: {error.message}</div>}
      {data && data.map((item: Item) => (
        <ListItem key={item._id}>{ item.title}</ListItem>
      ))}
    </List>
  );
};