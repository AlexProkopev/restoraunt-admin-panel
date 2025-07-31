import { ListItem } from '@mui/material';
import { useState } from 'react';
import TableCard from './TableCard/TableCard';
import TableModal from './TableModal/TableModal';

function TablesList({ dataList }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListItem sx={{ display: 'flex', maxWidth: '220px', mb: 1.5, flexDirection: 'column', alignItems: 'center' }}>
        <TableCard data={dataList} onOpen={() => setOpen(true)} />
      </ListItem>
      <TableModal open={open} onClose={() => setOpen(false)} table={dataList}/>
    </>
  );
}

export default TablesList;
