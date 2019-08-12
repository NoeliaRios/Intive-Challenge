const urlApi = `https://randomuser.me/api/?results=50`;
const box = document.querySelector('.box');

const countryApi = `https://restcountries.eu/rest/v2/alpha/`;

console.log(urlApi);

fetch(urlApi)
    .then(res => res.json())
    .then(data => {
        const primerosPerfiles = data.results;
        console.log(primerosPerfiles);

        

        box.innerHTML = primerosPerfiles.map(profile => `<div id="profile_box"><div id="picture"><img src="${profile.picture.medium}"></div><h1 id="">${profile.name.first} ${profile.name.last}</h1><h2 id="">${profile.location.city}</h2><h3 id="">${profile.nat}</h3></div>`).join('');



    })