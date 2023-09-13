import { useEffect, useState } from "react";

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
    <div>SITE</div>
  );
}

export default Site;
