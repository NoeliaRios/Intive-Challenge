const urlApi = `https://randomuser.me/api/?results=50`;

const box = document.querySelector('#box');
const countryApi = `https://restcountries.eu/rest/v2/alpha/`;
const header = document.querySelector('#header');
const largeProfile = document.querySelector('#large_profile');
console.log(urlApi);



const openProfile = function(){
    
    const thumbnailButton = document.querySelectorAll('.picture');
    for (let i = 0; i < thumbnailButton.length; i++) {
        thumbnailButton[i].onclick = function (e) {
            e.preventDefault();
            header.classList.add('displayNone');
            box.classList.add('displayNone');
            largeProfile.classList.remove('displayNone');
            const profileId = e.currentTarget.id;
            fetch(`https://randomuser.me/api/?seed=${profileId}`)
                .then(res => res.json())
                .then (data =>{
                    const profileData = data.results;
                    largeProfile.innerHTML = profileData.map(largeprof => `<div class="profile_focus"><img src="${largeprof.picture.large}"></div><h1>${largeprof.login.username}</h1><h2>${largeprof.name.first} ${largeprof.name.last}</h2><p>${largeprof.email}</p>`).join('');
                })

        }
    }  
}

fetch(urlApi)
    .then(res => res.json())
    .then(data => {
        const primerosPerfiles = data.results;
        box.innerHTML = primerosPerfiles.map(profile => `<div id="profile_box"><div class="picture" id="${data.info.seed}"><img src="${profile.picture.medium}"></div><h1 id="">${profile.name.first} ${profile.name.last}</h1><h2 id="">${profile.location.city}</h2><h3 id="">${profile.nat}</h3></div>`).join('');
        
        openProfile();

        





    })






