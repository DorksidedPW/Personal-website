import Section from './section';
import sanitizeHtml from 'sanitize-html';
import useStyles from './layoutstyles';
import FormatDates from '../../functions/formatedate';
import parse from 'html-react-parser'
import FormatPost from '../../functions/formatpost';

export default function Post(props) {
  const {post} = props;
  const classes = useStyles();

  return(<Section post={FormatPost(post)}/>)
} 