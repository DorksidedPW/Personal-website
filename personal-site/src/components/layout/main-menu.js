import { useEffect, useState } from "react"
import useStyles from "./layoutstyles";
import Iconbutton from "../buttons/iconbutton";

export default function MainMenu(props) {
  const {posts}        = props;
  const classes        = useStyles();
  const[menu, setMenu] = useState([]);
  
  useEffect(() => {
    if(posts) {
      let menuitems = [];
      posts.map((post) => {
        menuitems.push({
          id: post.id,
          label: post.title.rendered,
          subtitle: post.excerpt.rendered
        });
        setMenu(menuitems)
      })
    }
  }, [posts]);

  return(
    <div className={classes.menuContainer}>
       <nav>
          <ul style={{padding: 16, boxSizing: 'border-box'}}>
            {menu.map((item) => <li className={classes.menuItem}>
              <a href={`#${item.id}`}>
                <h4>{item.label}</h4>
                <span style={{fontSize: 12}}>{item.subtitle}</span>
              </a>  
            </li>)}
          </ul>
        </nav>
        <div>
          <Iconbutton />
          <Iconbutton />
          <Iconbutton />
        </div>
    </div>
  )
}