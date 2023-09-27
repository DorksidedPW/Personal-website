import MainMenu from "./main-menu";
import Button from '../buttons/button'
import { useEffect, useState } from "react";
import useStyles from "./layoutstyles";

export default function Header(props) {
  const {posts} = props;
  const classes   = useStyles();

  const[globalData, setGlobalData] = useState({
    siteName: '',
    siteDescription: ''
  });

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://www.paulwassen.nl/wp-json');
      const data = await response.json();

      setGlobalData({
        siteName: data.name,
        siteDescription: data.description
      });
    }
    getData();

  }, [])

  return(
    <header className={classes.header}>
      <div className={classes.siteTitle}>
        <h1 className={classes.siteName}>{globalData.siteName}</h1>
        <span className={classes.siteDescription}>{globalData.siteDescription}</span>
      </div>
    </header>
  )
}