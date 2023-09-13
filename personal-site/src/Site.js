import { useEffect, useState } from "react";
import Main from './components/layout/main';

const Site = () => {
  const[globalData, setGlobalData] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://www.paulwassen.nl/wp-json');
      const data = await response.json();

      setGlobalData(data);

    }

    getData();

  }, [])

  return (
    <div>
      <Main globalData={globalData}/>
    </div>
  );
}

export default Site;
