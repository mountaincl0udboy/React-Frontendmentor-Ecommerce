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
  '.navbar-content': {
    transform: props.transition ? '' : 'translateX(-100%)',
    transition: 'transform 200ms ease-in-out',
    width: '15.625em',
    minHeight: '100vh',
    position: 'absolute',
    zIndex: 12,
    top: 0,
    left: 0,
    backgroundColor: 'white',
    paddingLeft: '1.5em',
    paddingTop: '1.5em',

    'ul': {
      listStyle: 'none',
      padding: 0,
      margin: '0',
      display: 'flex',
      gap: '1.875em',
      flexDirection: 'column',
      'li': {
        color: props.theme.text.bold,
        fontSize: '1.125rem',
        fontWeight: 700
      }
    }
  },

  '@media (min-width: 1080px)': {
    display: 'block',
    opacity: 1,
    position: 'static',
    minWidth: 'unset',
    minHeight: 'unset',
    '.navbar-bg': {display: 'none'},
    '.navbar-content': {
      transform: 'translateX(0)',
      position: 'static',
      width: 'unset',
      minHeight: 'unset',
      padding: 0,
      '#close': {
        display: 'none'
      },
      'ul': {
        margin: 0,
        marginLeft: '0.875em',
        flexDirection: 'row',
        'li': {
          fontSize: '1rem',
          fontWeight: 400,
          color: props.theme.text.normal,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-2.875em',
            left: 0,
            width: '100%',
            height: '.25em',
            backgroundColor: props.theme.color.orange,
            transform: 'scaleX(0)',
            transition: 'transform 150ms ease-in-out'
          },
          '&:hover': {
            cursor: 'pointer',
            color: props.theme.text.bold,
            '&::after': {
              transform: 'scaleX(1)'
            }
          }
        }
      }

    }
  }
}));