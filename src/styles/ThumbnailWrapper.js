import styled from '@emotion/styled';

export default styled.div(props => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '2em',
  '> div': {
    position: 'relative',
    width: '5.5em',
    height: '5.5em',
    borderRadius: '.5em',
    '> img': {
      width: '5.5em',
      borderRadius: '.5em',
    },
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'hsla(0,0%,100%,0.625)',
      borderRadius: '.5em',
    },
    '&:hover': {
      cursor: 'pointer',
      '&::after': {
        content: '""'
      }
    }
  },
  '.thumbnail-active': {
    outline: `.15em solid ${props.theme.color.orange}`,
    '&::after': {
      content: '""'
    }
  }
}));