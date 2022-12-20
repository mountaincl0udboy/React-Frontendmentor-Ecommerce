import styled from '@emotion/styled';

export default styled.div(props => ({
  display: 'none',
  width: props.lightbox ? 550 : 445,
  flexShrink: 0,
  '.slide-grid': props.lightbox ? {
    position: 'relative',
    height: 550,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '.btn': {
      position: 'relative',
      zIndex: 5,
      width: '2.5em',
      height: '2.5em',
      backgroundColor: 'white',
      borderRadius: '50%',
      display: 'grid',
      placeContent: 'center',
      'svg': { 
        transform: 'scale(.8)' 
      },
      '&:hover': {
        cursor: 'pointer',
        'path': {
          stroke: props.theme.color.orange
        }
      },

      '&:first-of-type': { transform: 'scale(1.5) translate(-35%)' },
      '&:last-of-type': { transform: 'scale(1.5) translate(35%)' }
    },
  } : null,
  '.gallery-image': {
    width: '100%',
    height: props.lightbox ? 550 : 445,
    position: props.lightbox ? 'absolute' : 'relative',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    borderRadius: '1.05em',

    'img': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      objectFit: 'cover',
      borderRadius: '1em',
      transition: 'opacity 300ms ease-in'
    },
    '&:hover': {
      cursor: props.lightbox ? 'default' : 'zoom-in'
    }
  },
  '.gallery-thumbnail': {
    marginTop: '2em'
  },

  '@media (min-width: 1080px)': {
    display: 'block'
  }
}));