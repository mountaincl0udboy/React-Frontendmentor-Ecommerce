import styled from '@emotion/styled';

export default styled.section(props => ({
  margin: '1.5em',
  '> div': {
    'span': {
      fontSize: '.85rem',
      fontWeight: 700,
      color: 'hsl(26, 100%, 55%)',
      letterSpacing: '.125em'
    },

    'h1': {
      margin: '.5em 0',
      fontSize: '1.675rem',
      color: props.theme.text.bold
    },

    'p': {
      fontSize: '.95rem',
      fontWeight: 400,
      lineHeight: '1.5em',
      color: props.theme.text.normal
    }
  },

  '.price': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '1.25em 0',
    '> div:first-of-type': {
      fontSize: '1.675rem',
      fontWeight: 700,
      display: 'flex',
      gap: '.6em',
      alignItems: 'center',
      color: props.theme.text.bold,

      'span': {
        backgroundColor: props.theme.color.paleOrange,
        color: props.theme.color.orange,
        fontSize: '.95rem',
        letterSpacing: '0.05em',
        padding: '0.25em .5em',
        borderRadius: '.5em'
      }
    },
    '> div:last-of-type': {
      fontSize: '1rem',
      fontWeight: 700,
      color: props.theme.text.light,
      textDecorationLine: 'line-through'
    }
  },

  '.input': {
    minHeight: '3.375em',
    backgroundColor: props.theme.color.grayishBlue,
    borderRadius: '.625em',
    padding: '0 1.5em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: props.theme.text.bold,
    fontSize: '1rem',
    fontWeight: 700
  },

  '.btn': {
    margin: '1em 0',
    width: '100%',
    display: 'flex',
    gap: '1em',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '.625em'
  },

  '#gallery': {
    display: 'none'
  },

  '@media (min-width: 1080px)': {
    margin: '5.625em 11.45vw',
    padding: '0 3em',
    display: 'flex',
    alignItems: 'center',
    gap: '7.75em',
    '#gallery': {
      display: 'block',
      alignSelf: 'stretch'
    },
    '> div': {
      'h1': {
        fontSize: '2.75rem',
        margin: '0.375em 0'
      },
      'p': {
        fontSize: '1rem',
        margin: '2em 0 1.5em',
        lineHeight: '1.625rem'
      }
    },
    
    '.price': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '1em',
      '> div:first-of-type': {
        fontSize: '1.875em',
        gap: '.5em',

        'span': {
          fontSize: '1rem',
        }
      },
    },

    '.input-container': {
      display: 'flex',
      gap: '1.125em',
      alignItems: 'center',

      '.input': {
        flexBasis: '9.75em',
        flexShrink: 0,

        'svg:hover': {
          cursor: 'pointer',
          'path': {
            fill: 'hsla(26, 100%, 55%,0.425)'
          }
        }
      }
    }
  },
}));