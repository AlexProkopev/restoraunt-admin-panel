import { Box } from '@mui/material';

import { ThreeCircles } from 'react-loader-spinner';

function Loader() {
  return (
    <Box
      sx={{
        height: 50,
        width: 50,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <ThreeCircles
        visible={true}
        color="#ffffff"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Box>
  );
}

export default Loader;
