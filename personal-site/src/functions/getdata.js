export default function Backend(endpoint) {
  async function get() {

    const response = await fetch(`https://www.paulwassen.nl/wp-json/wp/v2${endpoint}`);
    const posts = await response.json();

    return(posts)
  }

  return(get());

}