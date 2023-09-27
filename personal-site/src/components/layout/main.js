import { useEffect, useState } from "react";
import Post from "./post";
import { useTheme } from "react-jss";
import MainMenu from "./main-menu";
import Header from './header';
import Footer from './footer';
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
      console.log('TODO Return error message')
      setPosts([])
    })
  }, []);

  return(
    <main className={classes.main}>
      <div className={classes.mainMenuContainer}>
        <MainMenu posts={posts}/>
      </div>
      <div className={classes.contentContainer}>
        <Header posts={posts} globalData={props.globalData}/>
        <div className={classes.postsContainer}>
          {posts.map((post) => {
            return(<Post key={post.id} post={post}/>)
          })}
        </div>
      </div>
      <Footer />
    </main>
  )
}