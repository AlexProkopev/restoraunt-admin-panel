export const orderPaginationStyle = {
        width: { xs: '310px', sm: '100%' },
        '& .MuiTablePagination-toolbar': {
          flexDirection: { xs: 'flex', sm: 'row' },
          flexWrap: { xs: 'wrap' },
          alignItems: { xs: 'center', sm: 'center' },
          gap: 1,
        },
        '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows':
          {
            fontSize: { xs: '12px', sm: '14px' },
          },
        '& .MuiTablePagination-actions': {
          marginLeft: { xs: 0, sm: 2 },
        },
      }