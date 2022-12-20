import styled from '@emotion/styled';

export default styled.button(props => ({
  padding: '1.125em 0',
  fontSize: '1rem',
  fontWeight: 700,
  textAlign: 'center',
  backgroundColor: props.theme.color.orange,
  border: 'none',
  borderRadius: '.375em',
  color: 'white',
  position: 'relative',
  '&::after': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'hsla(0,0%,100%,0.375)',
    borderRadius: '.5em',
  },
  '&:hover': {
    cursor: 'pointer',
    '&::after': {
      content: '""'
    }
  }
}));