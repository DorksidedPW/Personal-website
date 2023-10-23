import { useTheme } from "react-jss";
import buttonStyles from "../buttons/buttonstyles";
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';

export default function Iconbutton(props) {
  const theme = useTheme();
  const classes = buttonStyles({theme});
  
  console.log(classes)

  return(
    <a
      tabIndex={0}
      className={classes.iconButton}
    >
      <Icon path={mdiAccount}
        title="User Profile"
        size={1}
      />
    </a>
  )
}