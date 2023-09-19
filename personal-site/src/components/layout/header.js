import MainMenu from "./main-menu";
import Button from '../buttons/button'
import useStyles from "./layoutstyles";
import { useRef } from "react";

export default function Header(props) {
  const classes = useStyles();
  const headerRef = useRef(null);

  return(
    <header ref={headerRef} className={classes.header}>
      <div>LOGO</div>
      <MainMenu />
      <Button />  
    </header>
  )
}