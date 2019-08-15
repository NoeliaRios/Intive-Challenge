const urlApi = `https://randomuser.me/api/?results=50`;
const countryApi = `https://restcountries.eu/rest/v2/alpha/`;

const box = document.querySelector('#box');
const header = document.querySelector('#header');
const modalContainer = document.querySelector('#modal_container');

const openProfile = function () {
    const thumbnailButton = document.querySelectorAll('.picture');
    for (let i = 0; i < thumbnailButton.length; i++) {
        thumbnailButton[i].onclick = function (e) {
            e.preventDefault();
            // header.classList.add('displayNone');
            // box.classList.add('displayNone');
            modalContainer.classList.remove('displayNone');
            console.log(e.currentTarget)

            const email = e.currentTarget.getAttribute("email");
            const name = e.currentTarget.getAttribute('name');
            const lastname = e.currentTarget.getAttribute('lastname');
            const photo = e.currentTarget.getAttribute('photo');
            const username = e.currentTarget.getAttribute('username');
            const country = e.currentTarget.getAttribute('country');
            const age = e.currentTarget.getAttribute('age');

            document.querySelector('.place').innerHTML = '<i class="fas fa-map-marker-alt"></i>' + ' ' + country;
            document.querySelector('.age').innerHTML = age;
            document.querySelector('.largeP').src = photo;
            document.querySelector('.username').innerHTML = "@" + username;
            document.querySelector('.name').innerHTML = name + ' ' + lastname;
            document.querySelector('.email').innerHTML = email;
            
        }
    }
}

fetch(urlApi)
    .then(res => res.json())
    .then(data => {
        const primerosPerfiles = data.results;
        box.innerHTML = primerosPerfiles.map(profile => `<div id="profile_box"><div class="picture" country="${profile.nat}" age="${profile.dob.age}" name="${profile.name.first}" lastname="${profile.name.last}" username="${profile.login.username}" photo="${profile.picture.large}" email="${profile.email}" id="${data.info.seed}"><a href=""><img src="${profile.picture.medium}"></a></div><h1 id="">${profile.name.first} ${profile.name.last}</h1><h2 id="">@ ${profile.login.username}</h2><h3 id=""><i class="fas fa-map-marker-alt"></i>${profile.location.city} - ${profile.nat}</h3></div>`).join('');

        openProfile();
    })

const exitButton = document.querySelector('.exit_button');
exitButton.onclick = function (e) {
    e.preventDefault();
    header.classList.remove('displayNone');
    box.classList.remove('displayNone');
    modalContainer.classList.add('displayNone');
}






