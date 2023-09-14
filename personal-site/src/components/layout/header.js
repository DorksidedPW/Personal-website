import MainMenu from "./main-menu";
import useStyles from "./layoutstyles";

const Header = (props) => {
  const classes = useStyles();

  return(
    <header className={classes.header}>
      <MainMenu />
    </header>
  )
}

export default Header;