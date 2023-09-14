import Section from './section';
import sanitizeHtml from 'sanitize-html';

const Post = (props) => {
  const {post} = props;

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

  return(<Section post={formatPost(post)}/>)
}

export default Post;