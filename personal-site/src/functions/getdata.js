export default function getData(endpoint) {
  async function get() {
    const response = await fetch(`https://www.paulwassen.nl/wp-json/wp/v2${endpoint}`);
    const data = await response.json();

    return(data)
  }

  return(get());

}