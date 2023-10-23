import {createUseStyles} from 'react-jss'

const buttonStyles = createUseStyles((theme) => ({

  button: {
    width: 100,
    border: '2px solid',
    padding: '8px 16px 8px 16px',
    borderRadius: '50px',
    fontSize: 14,
    textAlign: 'center',
    boxShadow: `1px 2px 1px ${theme.palette.dOrange}`,
    textDecoration: 'none',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 600,
    color: theme.buttonStyles.labelColor,
    borderColor: theme.palette.dOrange,
    background: theme.palette.red,
    '&:hover': {
      color: theme.buttonStyles.labelColor,
      borderColor: theme.palette.red,
      boxShadow: `1px 2px 1px ${theme.palette.red}`,
      background: theme.palette.dOrange,
      transition: '0.1s ease-in',
    }
  },

  iconButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    background: 'none',
    border: 'none',
    color: 'white'
  }

}));

export default buttonStyles;