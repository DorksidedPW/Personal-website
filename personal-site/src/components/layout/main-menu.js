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
        console.log(post)

        menuitems.push({
          id: post.id,
          label: post.title.rendered,
        });
        setMenu(menuitems)
      })
    }
  }, [posts]);

  return(
    <nav>
      <ul>
        {menu.map((menuitem) => {
          return(
            <li>
              <a href={`#${menuitem.id}`}>{menuitem.label}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}