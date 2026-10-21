//RESUELVE TUS EJERCICIOS AQUI
//1.
async function getAllBreeds() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  return Object.keys(data.message);
}
//2.
async function getRandomDog() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  return data.message;
}
//3.
async function getAllImagesByBreed() {
  const response = await fetch("https://dog.ceo/api/breed/komondor/images");
  const data = await response.json();
  return data.message;
}
//4.
async function getAllImagesByBreed2(breed) {
  const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
  const data = await response.json();
  return data.message;
}
//5.
async function getGitHubUserProfile(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  return data;
}
//6.
async function printGithubUserProfile(username) {
  const data = await getGitHubUserProfile(username);
  const imagen = document.createElement(img);
  imagen.src = data.avatar_url;
  document.body.appendChild(imagen);

  const name = document.createElement("h1");
  name.innerText = data.name;
  document.body.appendChild(name);
  return { img: data.avatar_url, name: data.name };
}
//7.
async function getAndPrintGitHubUserProfile(username) {
  const response = await fetch(
    getAndPrintGitHubUserProfile(`https://api.github.com/users/${username}`),
  );
  const data = response.json;
  return <section>
    
  </section>;
}
//8.

//9.
