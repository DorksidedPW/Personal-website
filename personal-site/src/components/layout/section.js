import useStyles from "./layoutstyles";
import { useEffect, useRef } from "react";

const Section = (props) => {
  const{post} = props; 
  const sectionRef = useRef(null);
  const classes = useStyles();

  return(
    <section className={classes.section} ref={sectionRef}>
      <span className={classes.date}>{post.date}</span>
      <h2 className={classes.sectionTitle}>{post.title}</h2>
      <div className={classes.content} dangerouslySetInnerHTML={{__html: post.content}} />
    </section>
  )
}

export default Section;