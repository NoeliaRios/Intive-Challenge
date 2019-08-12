const urlApi = `https://randomuser.me/api/?results=50`;
const box = document.querySelector('.box');

console.log(urlApi);

fetch(urlApi)
    .then(res => res.json())
    .then(data => {
        const primerosPerfiles = data.results.slice(0, 50);
        console.log(primerosPerfiles);

        box.innerHTML = primerosPerfiles.map(profile => `<img src="${profile.picture.thumbnail}" alt="" id=""><h1 id="">${profile.name.first}</h1><h2 id="">${profile.location.city}</h2><h3 id="">${profile.location.nat}</h3>`).join('');



    })