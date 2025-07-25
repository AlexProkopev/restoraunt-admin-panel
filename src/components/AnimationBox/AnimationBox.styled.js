export const animationBoxStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  height: 200,
  bgcolor: 'rgba(124, 0, 0, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  borderRadius: '50px',
};

export const animationY = {
  y: [0, -20, 0],
};

export const animationTransition = {
  duration: 1,
  repeat: Infinity,
  repeatType: 'loop',
  ease: 'easeInOut',
};

export const textStyles = {
  width: { xs: '50px', sm: '150px', md: '300px' },

  fontSize: {
    xs: '14px',
    sm: '16px',
    md: '18px',
  },
};
