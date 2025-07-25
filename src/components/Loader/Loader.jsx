import { Box } from '@mui/material';

import { ThreeCircles } from 'react-loader-spinner';

function Loader() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 40,
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#ffffff"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Box>
  );
}

export default Loader;
