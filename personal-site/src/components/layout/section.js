const Section = (props) => {
  const{post} = props; 

  return(
    <section>
      <div dangerouslySetInnerHTML={{__html: post.content}}></div>
    </section>
  )
}

export default Section;