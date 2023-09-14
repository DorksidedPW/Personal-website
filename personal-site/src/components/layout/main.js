import { useEffect, useState } from "react";
import Page from "./page";

const Main = (props) => {
  const[pages, setPages] = useState([]);

  useEffect(() => {
    async function getPages() {
      const response = await fetch('https://www.paulwassen.nl/wp-json/wp/v2/pages/');
      const pages = await response.json();

      setPages(pages);
    }

    getPages();

  }, []);

  return(
    <div>
      {pages.map((page) => {
        return(<Page key={page.id} page={page}/>)
      })}
    </div>
  )
}

export default Main;  