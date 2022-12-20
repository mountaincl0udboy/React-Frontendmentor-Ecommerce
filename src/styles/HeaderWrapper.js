import styled from '@emotion/styled';

export default styled.header(props => ({
  display: 'flex',
  justifyContent: 'space-between',
  minHeight: '4.25em',
  padding: '0 1.5em',
  '.flex': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1.5em'
  },
  '#cart-icon': {
    position: 'relative',
    'path': {
      fill: props.showCart ? props.theme.text.bold : ''
    },
    'span': {
      position: 'absolute',
      top: '-.5em',
      right: 0,
      fontSize: '.65rem',
      fontWeight: 700,
      color: 'white',
      backgroundColor: 'hsl(26, 100%, 55%)',
      padding: '0 0.625em',
      borderRadius: '.625em',
      transform: 'translateX(40%)'
    }
  },
  '#avatar': {
    width: '1.5em',
    borderRadius: '50%'
  },

  '@media (min-width: 1080px)': {
    minHeight: '7em',
    padding: 0,
    margin: '0 11.45vw',
    borderBottom: '1px solid hsla(0,0%,0%,0.125)',
    '.flex': {
      gap: '2.5em'
    },
    '#menu': {
      display: 'none'
    },
    '#avatar': {
      width: '3em',
      outlineOffset: '.05em',
      '&:hover': {
        cursor: 'pointer',
        outline: `.125em solid ${props.theme.color.orange}`
      }
    },
    '#cart-icon:hover': {
      cursor: 'pointer',
      'path': {
        fill: props.theme.text.bold
      },
    }
  }
}));