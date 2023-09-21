import useStyles from "./layoutstyles";
import { useTheme } from "react-jss";
import { useEffect, useRef } from "react";

export default function Section(props) {
  const{post} = props;
  
  const sectionRef = useRef(null);
  const theme      = useTheme();
  const classes    = useStyles({theme});

  return(
    <section className={classes.sectionGrid} ref={sectionRef} id={post.id}>
      <img className={classes.sectionImage} src="https://cdn.pixabay.com/photo/2023/09/03/11/30/fire-8230528_960_720.jpg" />
      <div className={classes.section}>
        <h2>{post.title}</h2>
        <div className={classes.content}>
          {post.content}
        </div>
      </div>
    </section>
  )
}