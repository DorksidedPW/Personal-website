import { useTheme } from "react-jss";
import buttonStyles from "../buttons/buttonstyles";

export default function Button(...props) {
  const theme = useTheme();
  const classes = buttonStyles({theme});

  return(<a href='' className={classes.button}>BUTTON</a>)
}
