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

  console.log(page)
  
  return(
    <div></div>
  ) 
}

export default Page;