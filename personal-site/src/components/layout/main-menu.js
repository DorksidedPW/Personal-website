import { useEffect, useState } from "react"
import useStyles from "./layoutstyles";

const MainMenu = () => {
  const classes = useStyles();

  return(
    <nav>
      <ul>
        <li><a href=''>Link A</a></li>
        <li><a href=''>Link B</a></li>
        <li><a href=''>Link C</a></li>
      </ul>
    </nav>
  )
}
  
export default MainMenu