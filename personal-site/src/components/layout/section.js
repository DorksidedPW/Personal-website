import useStyles from "./layoutstyles";

const Section = (props) => {
  const{post} = props; 
  const classes = useStyles();

  return(
    <section className={classes.section}>
      <span className={classes.date}>{post.date}</span>
      <h2 className={classes.sectionTitle}>{post.title}</h2>
      <div className={classes.content} dangerouslySetInnerHTML={{__html: post.content}}></div>
    </section>
  )
}

export default Section;