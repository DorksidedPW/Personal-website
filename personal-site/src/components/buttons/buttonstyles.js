import {createUseStyles} from 'react-jss'

const buttonStyles = createUseStyles({

  button: {
    width: 100,
    border: '2px solid',
    padding: '8px 16px 8px 16px',
    borderRadius: '50px',
    fontSize: 14,
    textAlign: 'center',
    textDecoration: 'none',
    fontWeight: 800,
    color: ({theme}) => theme.buttonStyles.labelColor,
    borderColor: ({theme}) => theme.buttonStyles.borderColor,
    background: ({theme}) => theme.buttonStyles.backgroundColor
  }
});

export default buttonStyles;