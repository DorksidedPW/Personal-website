import parse from 'html-react-parser'
import sanitizeHtml from 'sanitize-html';
import FormatDates from './formatedate';  

export default function FormatPost(post) {
  const formattedPost = {
    id:       post.id,
    title:    post.title.rendered,
    date:     FormatDates(post.date),
    //Sanitize HTML
    content:  parse(post.content.rendered)
  }
  
  return(formattedPost); 
}