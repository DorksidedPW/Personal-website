import { useEffect, useState } from "react";
import Main from './components/layout/main';

const Site = (props) => {
  const[globalData, setGlobalData] = useState({
    siteName: '',
  });

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://www.paulwassen.nl/wp-json');
      const data = await response.json();

      setGlobalData({
        siteName: data.name,
        siteDescription: data.description
      });
    }
    getData();

  }, [])

  return (
    <Main globalData={globalData}/>
  );
}

export default Site;
