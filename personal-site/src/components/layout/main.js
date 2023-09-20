import { useEffect, useState } from "react";
import Header from "./header";
import Post from "./post";
import GetData from "../../functions/getdata";
import useStyles from "./layoutstyles";
import MainMenu from "./main-menu";
import theme from '../theme/theme';
import {ThemeProvider} from 'react-jss';

export default function Main(props) {
  const classes = useStyles(); 
  const[posts, setPosts] = useState([]); 
  const[media, setMedia] = useState([]);
  
  useEffect(() => {
    async function getPosts() {
      const response = await fetch('https://www.paulwassen.nl/wp-json/wp/v2/posts/');
      const posts = await response.json();

      setPosts(posts);
    }

    getPosts();
  }, []);

  return(
    <ThemeProvider theme={theme}> 
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '32px 15% 32px 15%',
          boxSizing: 'border-box',
          height: '100vh',
          maxHeight: '100vh',
          overflowY: 'auto', 
          scrollBehavior: 'smooth',
        }}
      >
        <div style={{width: '30%', minWidth: '30%', height: '100%', position: 'sticky', top: 0}}>
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