import { useEffect, useState } from "react";
import Post from "./post";
import useStyles from "./layoutstyles";
import MainMenu from "./main-menu";
import theme from '../theme/theme';
import Backend from '../../functions/getdata';
import {ThemeProvider} from 'react-jss';

export default function Main(props) {
  const classes          = useStyles(); 
  const[posts, setPosts] = useState([]); 
  
  useEffect(() => {
    const posts = Backend('/posts/').then(data => {
      setPosts(data);
    }).catch((err) => {
      console.log('Fout bij laden')
    })
  }, []);

  return(
    <ThemeProvider theme={theme}> 
      <div className={classes.main}>
        <div className={classes.mainMenuContainer}>
          <MainMenu posts={posts}/>
        </div>
        <div className={classes.postsContainer}>
          {posts.map((post) => {
            return(<Post key={post.id} post={post}/>)
          })}
        </div>
      </div>
    </ThemeProvider>
  )
}