import buttonStyles from "../buttons/buttonstyles";

const Button = (props) => {
  const classes = buttonStyles();

  return(<a href='' className={classes.button}>BUTTON</a>)
}

export default Button;