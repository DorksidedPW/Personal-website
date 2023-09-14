import buttonStyles from "../buttons/buttonstyles";

export default function Button(props) {
  const classes = buttonStyles();

  return(<a href='' className={classes.button}>BUTTON</a>)
}
