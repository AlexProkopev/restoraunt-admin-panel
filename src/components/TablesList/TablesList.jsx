import { ListItem } from '@mui/material';
import { useState } from 'react';
import TableCard from './TableCard/TableCard';
import TableModal from './TableModal/TableModal';

function TablesList({ dataList }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListItem sx={{ maxWidth: '300px', mb: 1.5 }}>
        <TableCard data={dataList} onOpen={() => setOpen(true)} />
      </ListItem>
      <TableModal open={open} onClose={() => setOpen(false)} table={dataList}/>
    </>
  );
}

export default TablesList;
