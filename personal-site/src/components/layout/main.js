import { useEffect, useState } from "react";
import Post from "./post";
import { useTheme } from "react-jss";
import MainMenu from "./main-menu";
import getData from '../../functions/getdata';
import layoutStyles from "./layoutstyles";

export default function Main(...props) {
  const theme = useTheme();
  const classes = layoutStyles({theme});
  const[posts, setPosts] = useState([]); 

  useEffect(() => {
    const posts = getData('/posts/').then(data => {
      setPosts(data);
    }).catch((err) => {
      console.log('Fout bij laden')
    })
  }, []);

  return(
    <div className={classes.main}>
      <div className={classes.postsContainer}>
        {posts.map((post) => {
          return(<Post key={post.id} post={post}/>)
        })}
      </div>
    </div>
  )
}