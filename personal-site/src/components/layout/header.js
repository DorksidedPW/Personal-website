import MainMenu from "./main-menu";
import Button from '../buttons/button'
import useStyles from "./layoutstyles";

const Header = (props) => {
  const classes = useStyles();

  return(
    <header className={classes.header}>
      <div>LOGO</div>
      <MainMenu />
      <Button />  
    </header>
  )
}

export default Header;