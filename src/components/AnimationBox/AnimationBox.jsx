import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { animationBoxStyles, animationTransition, animationY, textStyles } from './AnimationBox.styled';
const MotionBox = motion(Box);

function AnimationBox({children}) {
  return (
    <MotionBox
      sx={animationBoxStyles}
      animate={animationY}
      transition={animationTransition}
    >
      <Typography sx={textStyles}>{children}</Typography>
    </MotionBox>
  );
}

export default AnimationBox
