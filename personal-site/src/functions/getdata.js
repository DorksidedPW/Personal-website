export default async function getPosts() {
  let endpoint = '/posts/'

  const response = await fetch(`https://www.paulwassen.nl/wp-json/wp/v2${endpoint}`);
  const data = await response.json();

  console.log('GETDATA' + data)

  return(data)
}
