//RESUELVE TUS EJERCICIOS AQUI
//1.
async function getAllBreeds() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    return Object.keys(data.message);
}
//2.

//3.

//4.

//5.

//6.

//7.

//8.

//9.