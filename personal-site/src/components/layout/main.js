import { useEffect, useState } from "react";
import Header from "./header";
import Post from "./post";
import useStyles from "./layoutstyles";
import theme from '../theme/theme';
import {ThemeProvider} from 'react-jss';

export default function Main(props) {
  const classes = useStyles(); 
  const[posts, setPosts] = useState([]);

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
      <Header />
      {posts.map((post) => {
        return(<Post key={post.id} post={post}/>)
      })}
    </ThemeProvider>
  )
}