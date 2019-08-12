const urlApi = `https://randomuser.me/api/?results=10`;
const box = document.querySelector('.box');

console.log(urlApi);

fetch(urlApi)
    .then(res => res.json())
    .then(data => {
        const primerosPerfiles = data.results.slice(0, 50);
        console.log(primerosPerfiles);

        box.innerHTML = primerosPerfiles.map(profile => `<img src="${profile.picture.thumbnail}" alt="" id=""><h1 id=""></h1><h2 id=""></h2><h3 id=""></h3>`).join('');



    })