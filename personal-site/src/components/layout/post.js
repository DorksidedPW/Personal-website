import Section from './section';
import useStyles from './layoutstyles';
import FormatPost from '../../functions/formatpost';

export default function Post(props) {
  const {post} = props;
  const classes = useStyles();

  return(<Section post={FormatPost(post)}/>)
} 