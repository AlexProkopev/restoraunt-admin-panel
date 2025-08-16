export const listItem = {
        perspective: '1000px',
        width: 240,
        height: 320,
        m: 2,
      }

export const wrapperItem = (isFlipped) => {
         return {
             position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.8s ease',
          borderRadius: 3,
          boxShadow: '0 0 15px #00000099',
          transform: isFlipped ? 'rotateY(180deg)' : 'none',
         }
        }