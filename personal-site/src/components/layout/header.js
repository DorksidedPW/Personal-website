import MainMenu from "./main-menu";
import Button from '../buttons/button'
import useStyles from "./layoutstyles";

export default function Header(props) {
  const classes = useStyles();

  return(
    <header className={classes.header}>
      <div>LOGO</div>
      <MainMenu />
      <Button />  
    </header>
  )
}