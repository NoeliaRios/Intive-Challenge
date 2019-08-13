const urlApi = `https://randomuser.me/api/?results=50`;
const box = document.querySelector('#box');
const countryApi = `https://restcountries.eu/rest/v2/alpha/`;


fetch(urlApi)
    .then(res => res.json())
    .then(data => {
        const primerosPerfiles = data.results;
        box.innerHTML = primerosPerfiles.map(profile => `<div id="profile_box"><div class="picture"><img src="${profile.picture.medium}"></div><h1 id="">${profile.name.first} ${profile.name.last}</h1><h2 id="">${profile.location.city}</h2><h3 id="">${profile.nat}</h3></div>`).join('');

        const thumbnailButton = document.getElementsByClassName('.picture');
        const header = document.querySelector('#header');
        console.log(thumbnailButton);
        console.log(header);

        thumbnailButton.onclick = function (e) {
            e.preventDefault();
            header.classList.add('displayNone');
            box.classList.add('displayNone');
        }
    })






    // fetch(urlApi)
    //     .then(res => res.json())
    //     .then(data => {
    //         const profileData = data.results;
    //         box.innerHTML = profileData.map(profile => `<div id="large_profile"><div id="large_picture"><img src="${profile.picture.large}"></div><h1 id="">${profile.name.first} ${profile.name.last}</h1><h2 id="">${profile.location.city}</h2><h3 id="">${profile.nat}</h3></div>`).join('');


    //     })
