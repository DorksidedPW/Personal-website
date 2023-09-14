import Section from './section';
import sanitizeHtml from 'sanitize-html';
import useStyles from './layoutstyles';

const Post = (props) => {
  const {post} = props;
  const classes = useStyles();

  const formatPost = (post) => {
    const formattedPost = {
      id:       post.id,
      title:    post.title.rendered,
      date:     post.date,
      //Sanitize HTML
      content:  sanitizeHtml(post.content.rendered)
    }

    return(formattedPost); 
  }

  console.log(post)

  return(<Section post={formatPost(post)}/>)
}

export default Post;