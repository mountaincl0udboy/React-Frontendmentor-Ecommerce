import styled from '@emotion/styled';

export default styled.div(props => ({
  display: props.show ? 'block' : 'none',
  opacity: props.transition ? 1 : 0,
  transition: 'opacity 200ms ease-in-out',
  minWidth: '100vw',
  minHeight: '100vh',
  position: 'fixed',
  zIndex: 10,
  top: 0,
  left: 0,
  display: props.show ? 'grid' : 'none',
  placeContent: 'center',
  '.lightbox-content': {
    position: 'relative',
    zIndex: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: '1.375em',
    '.close': {
      alignSelf: 'flex-end',
      transform: 'scale(1.5)',
      'path': {
        fill: 'white'
      },
      '&:hover': {
        cursor: 'pointer',
        'path': {
          fill: props.theme.color.orange
        }
      }
    }
  }
}));