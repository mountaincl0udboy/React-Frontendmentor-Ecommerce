import styled from '@emotion/styled';

export default styled.div(props => ({
  aspectRatio: '375 / 300',
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 1em',
  '.slide-image': {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    'img': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'opacity 300ms ease-in'
    }
  },
  '.btn': {
    position: 'relative',
    zIndex: 5,
    width: '2.5em',
    height: '2.5em',
    backgroundColor: 'white',
    borderRadius: '50%',
    display: 'grid',
    placeContent: 'center',
    'img': { transform: 'scale(.8)' }
  },

  '@media (min-width: 1080px)': {
    display: 'none'
  }
}));