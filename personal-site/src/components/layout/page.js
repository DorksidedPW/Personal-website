import { useState, useEffect } from "react";

const Page = (props) => {
  const{page} = props;

  const[pageContent, setPageContent] = useState({
    content: '',
    author: '',
    status: '',
    slug: '',
    title: null,
    template: ''
  }) 

  useEffect(() => {
    setPageContent({})
  }, []); 

  return(
    <div>
      {pageContent.title}
      {pageContent.content}
    </div>
  )
}

export default Page;