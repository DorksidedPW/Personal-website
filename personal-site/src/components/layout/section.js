import useStyles from "./layoutstyles";
import { useTheme } from "react-jss";
import { useEffect, useRef } from "react";

export default function Section(props) {
  const{post} = props;
  const sectionRef = useRef(null);
    
  const theme = useTheme();
  const classes = useStyles({theme});

  return(
    <section className={classes.section} ref={sectionRef} id={post.id}>
      <h2>{post.title}</h2>
      <div className={classes.content}>
        {post.content}
      </div>
    </section>
  )
}