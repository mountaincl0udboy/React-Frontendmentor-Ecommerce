import styled from '@emotion/styled';

export default styled.section(props => ({
  display: props.show ? 'block' : 'none',
  opacity: props.transition ? 1 : 0,
  transition: 'opacity 200ms ease-in-out',
  width: '22.5em',
  position: 'absolute',
  zIndex: 8,
  top: '4.75em',
  right: '.46785em',
  backgroundColor: 'white',
  borderRadius: '.675em',
  boxShadow: '0px 5px 15px #0000003b',

  '> h2': {
    color: props.theme.text.bold,
    fontSize: '1.125rem',
    margin: 0,
    padding: '1.45em 1.33em',
    borderBottom: '1px solid hsla(0,0%,0%,0.125)'
  },

  '> div': {
    minHeight: '10.55em',
    display: 'grid',
    placeContent: props.isEmpty ? 'center' : '',
    color: props.isEmpty ? props.theme.text.normal : null,
    fontSize: '1.125rem',
    fontWeight: 700,
  },
  '.cart': {
    margin: '1.45em 1.33em',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5em',

    '.cart-info': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      '> div': {
        display: 'flex',
        gap: '1em',
        'img': {
          width: '3.125em',
          height: '3.125em',
          borderRadius: '.375em'
        },

        '> div': {
          display: 'flex',
          flexDirection: 'column',
          gap: '.5em',
          'h3,p': {
            color: props.theme.text.normal,
            fontSize: '.9rem',
            fontWeight: 400,
            margin: 0,
            'span': {
              color: props.theme.text.bold,
              marginLeft: '.25em',
              fontWeight: 700
            }
          }
        }
      }
    }
  },

  '@media (min-width: 1080px)': {
    top: '5.875em',
    right: '5.625em',
    '#delete:hover': {
      cursor: 'pointer'
    }
  }
}))