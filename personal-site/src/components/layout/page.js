import { useState, useEffect } from "react";

export default function Page(props) {
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