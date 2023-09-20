import { useEffect, useState } from "react"
import useStyles from "./layoutstyles";

export default function MainMenu(props) {
  const classes = useStyles();
  const[menu, setMenu] = useState([]);
  const {posts} = props;

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
    <nav className={classes.menuContainer}>
      <ul className={classes.menu}>
        {menu.map((menuitem) => {
          return(
            <li className={classes.menuItem}>
              <a href={`#${menuitem.id}`}>{menuitem.label}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}